import { Document } from 'dgeni';
import type { Environment } from 'nunjucks';

import { DaffApiDoc } from '@daffodil/docs-utils';

import { CollectLinkableSymbolsProcessor } from './collect-linkable-symbols';
import { API_TEMPLATES_PATH } from '../transforms/config';
import { FilterableProcessor } from '../utils/filterable-processor.type';

export const ADD_API_SYMBOLS_TO_PACKAGES_PROCESSOR_NAME = 'addApiSymbolsToPackages';

export class AddApiSymbolsToPackagesProcessor implements FilterableProcessor {
  readonly name = ADD_API_SYMBOLS_TO_PACKAGES_PROCESSOR_NAME;
  readonly $runAfter = ['paths-absolutified'];
  readonly $runBefore = ['rendering-docs'];

  docTypes = [];
  lookup = (doc: Document) => doc.id;

  constructor(
    private templateEngine,
    private templateFinder,
  ) {}

  $process(docs: Array<Document>): Array<Document> {
    const templates = this.templateFinder.templateFolders;
    this.templateFinder.templateFolders = [
      API_TEMPLATES_PATH,
      ...templates,
    ];
    const render: Environment['render'] = this.templateEngine.getRenderer();

    const ret = docs.map(doc => {
      if (this.docTypes.includes(doc.docType)) {
        const exportDocs = CollectLinkableSymbolsProcessor.packages.get(this.lookup(doc));
        doc.symbols = exportDocs?.map((d) => d.path);
        doc.api = exportDocs?.map((symbol) => render(this.templateFinder.getFinder()(symbol), { doc: symbol, child: true }));
        doc.apiToc = exportDocs?.flatMap((symbol: DaffApiDoc) => symbol.tableOfContents.map((entry) => ({
          ...entry,
          lvl: entry.lvl + 1,
        })));
      }
      return doc;
    });

    this.templateFinder.templateFolders = templates;
    return ret;
  }
};

export const ADD_API_SYMBOLS_TO_PACKAGES_PROCESSOR_PROVIDER = <const>[
  ADD_API_SYMBOLS_TO_PACKAGES_PROCESSOR_NAME,
  (templateEngine, templateFinder) => new AddApiSymbolsToPackagesProcessor(templateEngine, templateFinder),
];

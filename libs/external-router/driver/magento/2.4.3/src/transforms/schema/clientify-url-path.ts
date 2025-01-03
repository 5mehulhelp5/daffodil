export const clientifyUrlPath = <T extends string | null>(path: T, domain: string) => path ? new URL(path, domain).toString() : path;

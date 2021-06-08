declare function isValidDomain(text: string, opts?: { subdomain?: boolean; wildcard?: boolean, allowUnicode?: boolean }): boolean;

export = isValidDomain;

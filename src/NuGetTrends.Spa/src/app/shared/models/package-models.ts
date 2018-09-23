
// TODO: This can be used for Framework results as well.. so maybe rename to INuGetSearchResult?
export interface IPackageSearchResult {
  packageId: string;
  downloadCount: number;
  iconUrl: string;
}

export interface IPackageDownloadHistory {
    id: string;
    downloads: Array<IDownloadStats>;
    color?: string;
}

export interface IDownloadStats {
    date: Date;
    count: number;
}

export enum  SearchType {
  NuGetPackage = 1,
  Framework
}

export interface IPackageColor {
  id: string;
  color: string;
}

export class TagColor {
  code: string;
  private used: boolean;

  constructor(code: string, used: boolean = false) {
    this.code = code;
    this.used = used;
  }

  isInUse(): boolean {
    return this.used;
  }

  setUsed(): void {
    this.used = true;
  }

  setUnused(): void {
    this.used = false;
  }
}
export interface CompanyInfo {
  companyLogo: string;
  companyName: string;
  totalExperience?: string;
}

export interface PositionInfo {
  positionName: string;
  joiningDate: string;
  leavingDate?: string;
  address: string;
  experience?: string;
}

export interface ExperienceSectionType {
  componayInfo: CompanyInfo;
  positionInfo: PositionInfo[];
}

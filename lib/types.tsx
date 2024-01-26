export type SideNavItem = {
  title: string;
  path: string;
  icon?: JSX.Element;
  submenu?: boolean;
  subMenuItems?: SideNavItem[];
};

export type Country = {
  name: string;
  code: string;
  continentGroup: string;
};

interface GoogleUrlRecord {
  id: string;
  url: string;
  urlId: string;
  searchTerm: string;
  retrievedAt: Date;
}

export type GoogleUrlsTable = {
  insert: (record: GoogleUrlRecord) => Promise<void>;
  // Define other methods that you might use (e.g., find, update, delete)
};

export type Location = {
  country: string;
  countryCode: string;
  city: string;
  region: string;
  hidden?: boolean;
};

export type JobListing = {
  id: number;
  urlId: string;
  title: string;
  remote: boolean;
  location: Location;
  locations: Location[];
  state: string;
  isInternal: boolean;
  code: string;
  published: string;
  type: string;
  language: string;
  department: string[];
  accountUid: string;
  approvalStatus: string;
  workplace: string;
  description: string;
  requirements: string;
  benefits: string;
};

export type JobDetails = {
  jobId?: string;
  companyName?: string;
  urlId?: string;
  aboutCompany?: string | null;
  responsibilities?: string | null;
  techStack?: string[] | null;
  salaryRange?: string | null;
  salaryHigh?: number | null;
  jobType?: string | null;
  role?: string | null;
  minYearsOfExperience?: number | null;
  industry?: string | null;
};

export type BadgeUrls = Record<string, string>;

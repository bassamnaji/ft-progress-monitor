export interface IntraAccessToken {
  access_token: string;
  token_type: string;
  expires_in: number;
  scope: string;
  created_at: number;
}

export interface Me {
  id: number;
  email: string;
  login: string;
  first_name: string;
  last_name: string;
  usual_full_name: string;
  usual_first_name: null;
  url: string;
  phone: string;
  displayname: string;
  kind: string;
  image: Image;
  'staff?': boolean;
  correction_point: number;
  pool_month: string;
  pool_year: string;
  location: string;
  wallet: number;
  anonymize_date: Date;
  data_erasure_date: Date;
  created_at: Date;
  updated_at: Date;
  alumnized_at: null;
  'alumni?': boolean;
  'active?': boolean;
  groups: any[];
  cursus_users: CursusUser[];
  projects_users: ProjectsUser[];
  languages_users: LanguagesUser[];
  achievements: Achievement[];
  titles: any[];
  titles_users: any[];
  partnerships: any[];
  patroned: any[];
  patroning: any[];
  expertises_users: ExpertisesUser[];
  roles: any[];
  campus: Campus[];
  campus_users: CampusUser[];
}

export interface Achievement {
  id: number;
  name: string;
  description: string;
  tier: Tier;
  kind: Kind;
  visible: boolean;
  image: string;
  nbr_of_success: number | null;
  users_url: string;
}

export enum Kind {
  Pedagogy = 'pedagogy',
  Project = 'project',
  Scolarity = 'scolarity',
  Social = 'social',
}

export enum Tier {
  Easy = 'easy',
  Hard = 'hard',
  Medium = 'medium',
  None = 'none',
}

export interface Campus {
  id: number;
  name: string;
  time_zone: string;
  language: Language;
  users_count: number;
  vogsphere_id: number;
  country: string;
  address: string;
  zip: string;
  city: string;
  website: string;
  facebook: string;
  twitter: string;
  active: boolean;
  public: boolean;
  email_extension: string;
  default_hidden_phone: boolean;
}

export interface Language {
  id: number;
  name: string;
  identifier: string;
  created_at: Date;
  updated_at: Date;
}

export interface CampusUser {
  id: number;
  user_id: number;
  campus_id: number;
  is_primary: boolean;
  created_at: Date;
  updated_at: Date;
}

export interface CursusUser {
  grade: null | string;
  level: number;
  skills: Skill[];
  blackholed_at: Date | null;
  id: number;
  begin_at: Date;
  end_at: Date | null;
  cursus_id: number;
  has_coalition: boolean;
  created_at: Date;
  updated_at: Date;
  user: User;
  cursus: Cursus;
}

export interface Cursus {
  id: number;
  created_at: Date;
  name: string;
  slug: string;
  kind: string;
}

export interface Skill {
  id: number;
  name: string;
  level: number;
}

export interface User {
  id: number;
  email: string;
  login: string;
  first_name: string;
  last_name: string;
  usual_full_name: string;
  usual_first_name: null;
  url: string;
  phone: string;
  displayname: string;
  kind: string;
  image: Image;
  'staff?': boolean;
  correction_point: number;
  pool_month: string;
  pool_year: string;
  location: string;
  wallet: number;
  anonymize_date: Date;
  data_erasure_date: Date;
  created_at: Date;
  updated_at: Date;
  alumnized_at: null;
  'alumni?': boolean;
  'active?': boolean;
}

export interface Image {
  link: string;
  versions: Versions;
}

export interface Versions {
  large: string;
  medium: string;
  small: string;
  micro: string;
}

export interface ExpertisesUser {
  id: number;
  expertise_id: number;
  interested: boolean;
  value: number;
  contact_me: boolean;
  created_at: Date;
  user_id: number;
}

export interface LanguagesUser {
  id: number;
  language_id: number;
  user_id: number;
  position: number;
  created_at: Date;
}

export interface ProjectsUser {
  id: number;
  occurrence: number;
  final_mark: number | null;
  status: Status;
  'validated?': boolean | null;
  current_team_id: number | null;
  project: Project;
  cursus_ids: number[];
  marked_at: Date | null;
  marked: boolean;
  retriable_at: Date | null;
  created_at: Date;
  updated_at: Date;
}

export interface Project {
  id: number;
  name: string;
  slug: string;
  parent_id: null;
}

export enum Status {
  Finished = 'finished',
  InProgress = 'in_progress',
  SearchingAGroup = 'searching_a_group',
}

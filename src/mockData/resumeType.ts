export type UserBio = {
  title: string;
  description: string;
};

export type Skill = {
  skill: string;
  ratingOutOf10: number;
};

export type Achievement = {
  title: string;
  description: string;
};

export type JobExperience = {
  companyName: string;
  jobTitle: string;
  startAt: string;
  endAt: string;
  location: string;
  summary: string;
  workInfo?: {
    title: string;
    description: string
  };
  achievements?: {
    achievementsTitle: string;
    list: Achievement[];
  };
};

export type Education = {
  instituteName: string;
  courseName: string;
  fieldOfStudy: string;
  startAt: string;
  endAt: string;
  grade: string;
  description: string;
};

export type resumeData = {
  name: string;
  designation: string;
  mobileNo: string;
  email: string;
  userBio: UserBio;
  skilSet: Skill[];
  jobExperience: JobExperience[];
  educations: Education[];
  awards: string[]; // You can update this type based on the actual structure of awards if needed
};

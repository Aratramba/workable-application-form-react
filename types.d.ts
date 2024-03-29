/* https://workable.readme.io/reference/jobsshortcodeapplication_form */

type WorkableField = {
  id: string;
  required?: boolean;
  label?: string;
  type?:
    | "email"
    | "phone"
    | "text"
    | "file"
    | "group"
    | "date"
    | "paragraph"
    | "boolean"
    | "dropdown"
    | "multiple"
    | "number";
  options?: { name?: string; value?: string }[];
  singleOption?: boolean;
  supportedFileTypes?: string[];
  supportedMimeTypes?: string[];
  maxFileSize?: number;
  maxLength?: number;
  helper?: string;
  fields?: WorkableField[];
  defaultValue?: any;
};

type WorkableFieldset = {
  name: string;
  fields: WorkableField[];
};

/*
key	type	description
name (required)	string	This field is optional if firstname and lastname are provided
firstname (required)	string	The candidate's first name, It's optional if name is provided
lastname (required)	string	The candidate's last name, it's optional if name is provided
email (required)	string	The candidate's email
headline	string	One line description as provided by the candidate or you
summary	string	The profile summary provided by the candidate
address	string	The candidate's address
phone	string	The candidate's phone number
cover_letter	string	The candidate's cover letter
education_entries	array	Explained below
experience_entries	array	Explained below
answers	array	Explained below
skills	string (list)	The candidate's skills.
tags	array	A list of the candidate's tags
disqualified	boolean	If true, it will mark the candidate as diqualified
disqualification_reason	string	Required only when EOCC is enabled for your account
disqualified_at	string	In ISO 8601 format (YYYY-MM-DD). If you leave this field empty, we will use the current timestamp
social_profiles	array	Explained below
domain	string	The source of the candidate
recruiter_key	string	Explained below
*/

type WorkableCandidate = {
  name?: string;
  firstname: string;
  lastname: string;
  email: string;
  headline: string;
  summary: string;
  address: string;
  phone: string;
  cover_letter: string;
  education_entries: WorkableEducationEntry[];
  experience_entries: WorkableExperienceEntry[];
  answers: WorkableAnswer[];
  skills: string[];
  tags: string[];
  disqualified?: boolean;
  disqualification_reason?: string;
  disqualified_at?: string;
  social_profiles: WorkableSocialProfile[];
  domain: string;
  recruiter_key?: string;
  image_url?: string;
  resume_url?: string;
};

/* 
(How can I post the candidate’s experience?)

key	type	description
title (required)	string	The candidate's title
summary	string	A summary of the candidate's experience
company	string	The candidate's company
industry	string	The candidate's working industry
start_date	string	In ISO 8601 format (YYYY-MM-DD)
end_date	string	In ISO 8601 format (YYYY-MM-DD)
current	boolean	True if candidate still works there
*/

type WorkableExperienceEntry = {
  title: string;
  summary: string;
  company: string;
  industry: string;
  start_date: string;
  end_date: string;
  current: boolean;
};

/*
(How can I post the candidate’s education?)

key	type	description
school (required)	string	The candidate's school
degree	string	The candidate's degree
field_of_study	string	The candidate's field of study
start_date	string	In ISO 8601 format (YYYY-MM-DD)
end_date	string	In ISO 8601 format (YYYY-MM-DD)
*/

type WorkableEducationEntry = {
  school: string;
  degree: string;
  field_of_study: string;
  start_date: string;
  end_date: string;
};

/*
(How can I post the candidate’s social?)

key	type	description
type (required)	string	One of the following types: academiaedu, angellist, behance, bitbucket, blogger, crunchbase, dandyid, delicious, deviantart, digg, doyoubuzz, dribble, dribbble, econsultancy, facebook, flavorsme, flickr, fullcontact, getglue, gist, github, goodreads, googleplus, gravatar, hackernews, hiim, klout, lanyrd, linkedin, myspace, ohloh, orkut, pinterest, quora, reddit, scribd, slideshare, stackexchange, stackoverflow, tumblr, twitter, typepad, vk, wordpress, xing
username	string	The candidate's username
url (required)	string	The candidate's URL
*/

type WorkableSocialProfile = {
  type:
    | "academiaedu"
    | "angellist"
    | "behance"
    | "bitbucket"
    | "blogger"
    | "crunchbase"
    | "dandyid"
    | "delicious"
    | "deviantart"
    | "digg"
    | "doyoubuzz"
    | "dribble"
    | "dribbble"
    | "econsultancy"
    | "facebook"
    | "flavorsme"
    | "flickr"
    | "fullcontact"
    | "getglue"
    | "gist"
    | "github"
    | "goodreads"
    | "googleplus"
    | "gravatar"
    | "hackernews"
    | "hiim"
    | "klout"
    | "lanyrd"
    | "linkedin"
    | "myspace"
    | "ohloh"
    | "orkut"
    | "pinterest"
    | "quora"
    | "reddit"
    | "scribd"
    | "slideshare"
    | "stackexchange"
    | "stackoverflow"
    | "tumblr"
    | "twitter"
    | "typepad"
    | "vk"
    | "wordpress"
    | "xing";
  username: string;
  url: string;
};

/*  
(How can I post the candidate’s resume along with the candidate information?)

key	type	description
resume_url	string	a url pointing to the candidate’s resume

or

key	type	description
name	string	the candidate’s resume name
data	string	the candidate’s resume encoded in base64
*/

type WorkableResume = {
  resume_url?: string;
  name?: string;
  data?: string;
};

/* 
(How can I post the candidate's answers?)
 */

type WorkableAnswerBase = {
  label: string;
  question_key: string;
};

type WorkableAnswer =
  | WorkableAnswerShortText
  | WorkableAnswerFreeText
  | WorkableAnswerBoolean
  | WorkableAnswerMultipleChoice
  | WorkableAnswerDropdown
  | WorkableAnswerDate
  | WorkableAnswerNumeric
  | WorkableAnswerFile
  | WorkableAnswerFileData;

/*
Short text questions

key	type	description
question_key (required)	string	The question key
body (required)	string	The candidate's response
*/

type WorkableAnswerShortText = {
  body: string;
} & Required<WorkableAnswerBase>;

/*
Free text questions

key	type	description
question_key (required)	string	The question key
body (required)	string	The candidate's response
*/

type WorkableAnswerFreeText = {
  body: string;
} & Required<WorkableAnswerBase>;

/*
Boolean questions

key	type	description
question_key (required)	string	The question key
checked (required)	boolean	true | false
*/

type WorkableAnswerBoolean = {
  checked: boolean;
} & Required<WorkableAnswerBase>;

/*
Multiple choice questions

key	type	description
question_key (required)	string	The question key
choices (required)	array	[choices_ids]. For single answer questions provide only one selected choice
*/

type WorkableAnswerMultipleChoice = {
  choices: string[];
} & Required<WorkableAnswerBase>;

/*
Dropdown questions

key	type	description
question_key (required)	string	The question key
choices (required)	array	[choices_ids]. Provide only one selected choice
*/

interface WorkableAnswerDropdown extends WorkableAnswerBase {
  choices: string[];
}

/*
Date questions

key	type	description
question_key (required)	string	The question key
date	string	The date in ISO 8601 format (i.e. "2017-05-22")
*/

type WorkableAnswerDate = {
  date?: string;
} & Required<WorkableAnswerBase>;

/*
Numeric question

key	type	description
question_key (required)	string	The question key
value	number	The value may be an integer or floating point number (use '.' as decimal point separator)
*/

type WorkableAnswerNumeric = {
  value?: number;
} & Required<WorkableAnswerBase>;

/*
File question

key	type	description
question_key (required)	string	The question key
file_url	string	a url pointing to the candidate’s answer
*/

type WorkableAnswerFile = {
  file_url?: string;
} & Required<WorkableAnswerBase>;

/*
key	type	description
name	string	The file name
data	string	The candidate’s answer encoded in base64
*/

type WorkableAnswerFileData = {
  name?: string;
  file?: {
    name?: string;
    data?: string;
  };
} & Required<WorkableAnswerBase>;

/**
 * Configuration
 */

type FormConfigType = {
  telephoneInitialCountry?: string;
  telephonePreferredCountries?: string[];
  telephoneAllowDropdown?: boolean;
  telephoneAutoHideDialCode?: boolean;
  telephoneAutoPlaceholder?: "polite" | "aggressive" | "off";
  telephoneCustomContainer?: string;
  telephoneCustomPlaceholder?: (
    selectedCountryPlaceholder,
    selectedCountryData,
  ) => string | null;
  telephoneDropdownContainer?: HTMLElement | null;
  telephoneExcludeCountries?: string[];
  telephoneFormatOnDisplay?: boolean;
  telephoneGeoIpLookup?: (success, failure) => string;
  telephoneHiddenInput?: string;
  telephoneLocalizedCountries?: { [key: string]: string };
  telephoneNationalMode?: boolean;
  telephoneOnlyCountries?: string[];
  telephonePlaceholderNumberType?:
    | "FIXED_LINE"
    | "MOBILE"
    | "FIXED_LINE_OR_MOBILE"
    | "TOLL_FREE"
    | "PREMIUM_RATE"
    | "SHARED_COST"
    | "VOIP"
    | "PERSONAL_NUMBER"
    | "PAGER"
    | "UAN"
    | "VOICEMAIL"
    | "UNKNOWN";
  telephoneSeparateDialCode?: boolean;

  // labels
  labelForm?: string;
  labelSubmit?: string;
  labelAdd?: string;
  labelSave?: string;
  labelCancel?: string;
  labelEdit?: string;
  labelDelete?: string;
  labelClose?: string;
  labelOptional?: string;
  labelClear?: string;

  // dropzone
  labelDropzoneUpload?: string;
  labelDropzoneDragDrop?: string;
  labelDropzoneMaxSize?: string;
  labelDropzoneAcceptableFileTypes?: string;
  labelDropzoneReplaceFile?: string;
  labelDropzoneNoFilesAccepted?: string;
  labelDropzoneAborted?: string;
  labelDropzoneError?: string;

  // icons
  iconCancel?: () => JSX.Element;
  iconCheck?: () => JSX.Element;
  iconDelete?: () => JSX.Element;
  iconEdit?: () => JSX.Element;
  iconClear?: () => JSX.Element;
};

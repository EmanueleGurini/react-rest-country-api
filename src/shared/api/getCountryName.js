const isoCountries = {
  ABW: "Aruba",
  AFG: "Afghanistan",
  AGO: "Angola",
  AIA: "Anguilla",
  ALA: "Åland Islands",
  ALB: "Albania",
  AND: "Andorra",
  ARE: "United Arab Emirates",
  ARG: "Argentina",
  ARM: "Armenia",
  ASM: "American Samoa",
  ATA: "Antarctica",
  ATF: "French Southern Territories",
  ATG: "Antigua and Barbuda",
  AUS: "Australia",
  AUT: "Austria",
  AZE: "Azerbaijan",
  BDI: "Burundi",
  BEL: "Belgium",
  BEN: "Benin",
  BES: "Bonaire, Sint Eustatius and Saba",
  BFA: "Burkina Faso",
  BGD: "Bangladesh",
  BGR: "Bulgaria",
  BHR: "Bahrain",
  BHS: "Bahamas",
  BIH: "Bosnia and Herzegovina",
  BLM: "Saint Barthélemy",
  BLR: "Belarus",
  BLZ: "Belize",
  BMU: "Bermuda",
  BOL: "Bolivia",
  BRA: "Brazil",
  BRB: "Barbados",
  BRN: "Brunei Darussalam",
  BTN: "Bhutan",
  BVT: "Bouvet Island",
  BWA: "Botswana",
  CAF: "Central African Republic",
  CAN: "Canada",
  CCK: "Cocos Islands",
  CHE: "Switzerland",
  CHL: "Chile",
  CHN: "China",
  CIV: "Côte d'Ivoire",
  CMR: "Cameroon",
  COD: "Congo",
  COG: "Congo",
  COK: "Cook Islands",
  COL: "Colombia",
  COM: "Comoros",
  CPV: "Cabo Verde",
  CRI: "Costa Rica",
  CUB: "Cuba",
  CUW: "Curaçao",
  CXR: "Christmas Island",
  CYM: "Cayman Islands",
  CYP: "Cyprus",
  CZE: "Czechia",
  DEU: "Germany",
  DJI: "Djibouti",
  DMA: "Dominica",
  DNK: "Denmark",
  DOM: "Dominican Republic",
  DZA: "Algeria",
  ECU: "Ecuador",
  EGY: "Egypt",
  ERI: "Eritrea",
  ESH: "Western Sahara",
  ESP: "Spain",
  EST: "Estonia",
  ETH: "Ethiopia",
  FIN: "Finland",
  FJI: "Fiji",
  FLK: "Falkland Islands",
  FRA: "France",
  FRO: "Faroe Islands",
  FSM: "Micronesia",
  GAB: "Gabon",
  GBR: "United Kingdom",
  GEO: "Georgia",
  GGY: "Guernsey",
  GHA: "Ghana",
  GIB: "Gibraltar",
  GIN: "Guinea",
  GLP: "Guadeloupe",
  GMB: "Gambia",
  GNB: "Guinea-Bissau",
  GNQ: "Equatorial Guinea",
  GRC: "Greece",
  GRD: "Grenada",
  GRL: "Greenland",
  GTM: "Guatemala",
  GUF: "French Guiana",
  GUM: "Guam",
  GUY: "Guyana",
  HKG: "Hong Kong",
  HMD: "Heard Island and McDonald Islands",
  HND: "Honduras",
  HRV: "Croatia",
  HTI: "Haiti",
  HUN: "Hungary",
  IDN: "Indonesia",
  IMN: "Isle of Man",
  IND: "India",
  IOT: "British Indian Ocean Territory",
  IRL: "Ireland",
  IRN: "Iran",
  IRQ: "Iraq",
  ISL: "Iceland",
  ISR: "Israel",
  ITA: "Italy",
  JAM: "Jamaica",
  JEY: "Jersey",
  JOR: "Jordan",
  JPN: "Japan",
  KAZ: "Kazakhstan",
  KEN: "Kenya",
  KGZ: "Kyrgyzstan",
  KHM: "Cambodia",
  KIR: "Kiribati",
  KNA: "Saint Kitts and Nevis",
  KOR: "Korea",
  KWT: "Kuwait",
  LAO: "Lao",
  LBN: "Lebanon",
  LBR: "Liberia",
  LBY: "Libya",
  LCA: "Saint Lucia",
  LIE: "Liechtenstein",
  LKA: "Sri Lanka",
  LSO: "Lesotho",
  LTU: "Lithuania",
  LUX: "Luxembourg",
  LVA: "Latvia",
  MAC: "Macao",
  MAF: "Saint Martin",
  MAR: "Morocco",
  MCO: "Monaco",
  MDA: "Moldova",
  MDG: "Madagascar",
  MDV: "Maldives",
  MEX: "Mexico",
  MHL: "Marshall Islands",
  MKD: "North Macedonia",
  MLI: "Mali",
  MLT: "Malta",
  MMR: "Myanmar",
  MNE: "Montenegro",
  MNG: "Mongolia",
  MNP: "Northern Mariana Islands",
  MOZ: "Mozambique",
  MRT: "Mauritania",
  MSR: "Montserrat",
  MTQ: "Martinique",
  MUS: "Mauritius",
  MWI: "Malawi",
  MYS: "Malaysiav",
  MYT: "Mayotte",
  NAM: "Namibia",
  NCL: "New Caledonia",
  NER: "Niger",
  NFK: "Norfolk Island",
  NGA: "Nigeria",
  NIC: "Nicaragua",
  NIU: "Niue",
  NLD: "Netherlands",
  NOR: "Norway",
  NPL: "Nepal",
  NRU: "Nauru",
  NZL: "New Zealand",
  OMN: "Oman",
  PAK: "Pakistan",
  PAN: "Panama",
  PCN: "Pitcairn",
  PER: "Peru",
  PHL: "Philippines",
  PLW: "Palau",
  PNG: "Papua New Guinea",
  POL: "Poland",
  PRI: "Puerto Rico",
  PRK: "Korea",
  PRT: "Portugal",
  PRY: "Paraguay",
  PSE: "Palestine",
  PYF: "French Polynesia",
  QAT: "Qatar",
  REU: "Réunion",
  ROU: "Romania",
  RUS: "Russian Federation",
  RWA: "Rwanda",
  SAU: "Saudi Arabia",
  SDN: "Sudan",
  SEN: "Senegal",
  SGP: "Singapore",
  SGS: "South Georgia",
  SHN: "Saint Helena",
  SJM: "Svalbard and Jan Mayen",
  SLB: "Solomon Islands",
  SLE: "Sierra Leone",
  SLV: "El Salvador",
  SMR: "San Marino",
  SOM: "Somalia",
  SPM: "Saint Pierre and Miquelon",
  SRB: "Serbia",
  SSD: "South Sudan",
  STP: "Sao Tome and Principe",
  SUR: "Suriname",
  SVK: "Slovakia",
  SVN: "Slovenia",
  SWE: "Sweden",
  SWZ: "Eswatini",
  SXM: "Sint Maarten",
  SYC: "Seychelles",
  SYR: "Syrian Arab Republic",
  TCA: "Turks and Caicos Islands",
  TCD: "Chad",
  TGO: "Togo",
  THA: "Thailand",
  TJK: "Tajikistan",
  TKL: "Tokelau",
  TKM: "Turkmenistan",
  TLS: "Timor-Leste",
  TON: "Tonga",
  TTO: "Trinidad and Tobago",
  TUN: "Tunisia",
  TUR: "Türkiye",
  TUV: "Tuvalu",
  TWN: "Taiwan",
  TZA: "Tanzania",
  UGA: "Uganda",
  UKR: "Ukraine",
  UMI: "United States Minor Outlying Islands",
  URY: "Uruguay",
  USA: "United States of America",
  UZB: "Uzbekistan",
  VAT: "Holy See",
  VCT: "Saint Vincent and the Grenadines",
  VEN: "Venezuela",
  VGB: "Virgin Islands (British)",
  VIR: "Virgin Islands (U.S.)",
  VNM: "Viet Nam",
  VUT: "Vanuatu",
  WLF: "Wallis and Futuna",
  WSM: "Samoa",
  YEM: "Yemen",
  ZAF: "South Africa",
  ZMB: "Zambia",
  ZWE: "Zimbabwe",
};

/**
 * Get the ISO 3166-1 alpha-3 code and return the corresponding country name.
 *
 * @param {string} countryCode
 * @returns string
 */
export const getCountryName = (countryCode) => {
  return isoCountries.hasOwnProperty(countryCode)
    ? isoCountries[countryCode]
    : countryCode;
};

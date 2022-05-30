const contracts = "/contracts/";
const cv = "/civil_procedure/";
const conLaw = "/constitutional_law/";
const crimLaw = "/criminal_law/";
const cp = "/criminal_procedure/";
const cav = "/california_civil_procedure/";
const cmp = "/california_community_property/";
const ev = "/evidence/";
const cev = "/california_evidence/";
const rp = "/real_property/";
const ts = "/torts/";
const co = "/conflict_of_laws/";
const fl = "/family_law/";
const tne = "/trusts_and_estates/";
const ba = "/business_associations/";
const ucc = "/uniform_commercial_code/";
const sec = "/secured_transactions/";
const al = "/administrative_law/";
const tx = "/tax/";
const el = "/election_law/";
const fj = "/federal_jurisdiction/";
const pl = "/patent_law/";
const tl = "/trademark_law/";
const cy = "/copyright_law/";
const il = "/indian_law/";
const im = "/immigration_law/";
const eg = "/energy_law/";
const env = "/environmental_law/";
const ll = "/labor_law/";
const hl = "/health_law/";
const rem = "/remedies/";
const sl = "/statutory_interpretation/";
const intl = "/international_law/";
const pr = "/professional_responsibility/";

const Routes = [
	{ name: "Front Matter", path: "/", children: [] },
	// { name: "Civil Procedure", path: `${cv}`, children: [] },
	// { name: "California Civil Procedure", path: `${cav}`, children: [] },
	// { name: "California Community Property", path: `${cmp}`, children: [] },
	// { name: "Contracts", path: `${contracts}`, children: [] },
	// { name: "Constitutional Law", path: `${conLaw}`, children: [] },
	// { name: "Professional Responsibility", path: `${pr}`, children: [] },
	// { name: "Statutory Interpretation", path: `${sl}`, children: [] },
	{ name: "Criminal Law", path: `${crimLaw}main`, children: [] },
	{ name: "Criminal Procedure", path: `${cp}main`, children: [] },
	// { name: "Evidence", path: `${ev}`, children: [] },
	// { name: "California Evidence", path: `${cev}`, children: [] },
	// { name: "Real Property", path: `${rp}`, children: [] },
	{ name: "Torts", path: `${ts}main`, children: [] },
	// { name: "Conflict of Laws", path: `${co}`, children: [] },
	// { name: "International Law", path: `${intl}`, children: [] },
	// { name: "Remedies", path: `${rem}`, children: [] },
	// { name: "Family Law", path: `${fl}`, children: [] },
	// { name: "Trusts & Estates", path: `${tne}`, children: [] },
	{ name: "Business Associations", path: `${ba}`, children: [] },
	// { name: "Uniform Cmmercial Code", path: `${ucc}`, children: [] },
	// { name: "Secured Transactions", path: `${sec}`, children: [] },
	// { name: "Administrative Law", path: `${al}`, children: [] },
	// { name: "Immigration Law", path: `${im}`, children: [] },
	// { name: "Energy Law", path: `${eg}`, children: [] },
	// { name: "Labor Law", path: `${ll}`, children: [] },
	// { name: "Health Law", path: `${hl}`, children: [] },
	// { name: "Environmental Law", path: `${env}`, children: [] },
	// { name: "Tax Law", path: `${tx}`, children: [] },
	// { name: "Election Law", path: `${el}`, children: [] },
	// { name: "Federal Jurisdiction", path: `${fj}`, children: [] },
	// { name: "Patent Law", path: `${pl}`, children: [] },
	// { name: "Trademark Law", path: `${tl}`, children: [] },
	// { name: "Copyright Law", path: `${cy}`, children: [] },
	// { name: "Indian Law", path: `${il}`, children: [] },
];

export default Routes;

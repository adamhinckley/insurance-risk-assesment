import React, { Component } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import Autocomplete from "./AutoComplete"
import EligibleProducts from "./ElligibleProdicts"

export default class MedicationList extends Component {
    constructor() {
        super()
        this.state = {
            product: "",
            medication: "",
            message: "",
            outcome: [],
            loading: false
        }
    }
    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    getMedicationResult = e => {
        e.preventDefault()
        const { product, medication } = this.state
        if (!product || !medication) {
            this.setState({ message: "Choose a product and medication" })
        } else {
            this.setState({ loading: true })
        }
        axios
            .post("https://insurance-risk-assesment.herokuapp.com/api/meds/", {
                prescription: medication,
                product: product
            })
            .then(res => {
                this.setState({ outcome: res.data, loading: false })
            })
            .catch(err => {
                console.log(err)
            })
    }

    putMedOnState = (e, input) => {
        // e.preventDefault();
        e.persist()
        this.setState({ medication: input })
    }

    render() {
        const { message, outcome, loading } = this.state
        return (
            <div className="med-list">
                <div className="back-button-container">
                    <Link to="/">
                        <button className="back-button">back</button>
                    </Link>
                </div>
                <form className="input-container" onSubmit={this.getMedicationResult}>
                    <label htmlFor="Product" />
                    <select name="product" value={this.state.product} className="input" onChange={this.changeHandler}>
                        <option className="medication-select">Choose Product</option>
                        <option name="CFG Dignified Choice" value="CFG Dignified Choice" className="medication-select">
                            CFG Dignified Choice
                        </option>
                        <option name="CFG Term" value="CFG Term" className="medication-select">
                            CFG Term
                        </option>
                        <option name="Foresters PlanRight" value="Foresters PlanRight" className="medication-select">
                            Foresters PlanRight
                        </option>
                        <option
                            name="Foresters Strong Foundation"
                            value="Foresters Strong Foundation"
                            className="medication-select"
                        >
                            Foresters Strong Foundation
                        </option>
                        <option name="MOO Living Promise" value="MOO Living Promise" className="medication-select">
                            MOO Living Promise
                        </option>
                        <option name="MOO Term" value="MOO Term" className="medication-select">
                            MOO Term
                        </option>
                        <option name="Phoenix Remembrance" value="Phoenix Remembrance" className="medication-select">
                            Phoenix Remembrance
                        </option>
                        <option name="Phoenix Safe Harbor" value="Phoenix Safe Harbor" className="medication-select">
                            Phoenix Safe Harbor
                        </option>
                        <option
                            name="Transamerica Solutions"
                            value="Transamerica Solutions"
                            className="medication-select"
                        >
                            Transamerica Solutions
                        </option>
                        />
                    </select>
                    <Autocomplete suggestions={suggestions} putMedOnState={this.putMedOnState} />

                    <button type="submit">Check Medication</button>
                </form>
                <EligibleProducts outcome={outcome} message={message} loading={loading} />
            </div>
        )
    }
}

const suggestions = [
    "abacavir",
    "abilify",
    "abiraterone acetate",
    "abraxane",
    "acamprosate",
    "acarbose",
    "accuneb",
    "accupril",
    "accuretic",
    "acebutolol hcl",
    "aceon",
    "acetazolamide",
    "acetyl l-carnitine",
    "acetylcysteine",
    "actigall",
    "actiq",
    "activase",
    "actoplus met",
    "actoplus",
    "actos",
    "adalat",
    "adcirca",
    "adriamycin",
    "adrimycin",
    "adrucil",
    "advair symbicort",
    "advair",
    "afinitor",
    "agenerase",
    "aggrastat",
    "aggrenox",
    "agrylin",
    "akineton",
    "albenza",
    "albuked",
    "albumin",
    "albuminar",
    "alburx",
    "albutein",
    "albuterol",
    "aldactazide",
    "aldactone",
    "aldomat",
    "alimta",
    "alkeran",
    "allopurinol",
    "aloxi",
    "alprazolam",
    "altace",
    "altretamine",
    "alvesco",
    "amantadine hcl",
    "amantadine",
    "amaryl",
    "ambisome",
    "amifostine",
    "amiloride hcl",
    "aminophylline",
    "amiodarone hcl",
    "amiodarone",
    "amlodipine besylate/benaz",
    "amlodipine",
    "amobarbital",
    "ampyra",
    "amyl nitrate",
    "amytal",
    "anagrelide hcl",
    "anastrozole",
    "android",
    "androxy",
    "angiomax",
    "anoro ellipta",
    "antabuse",
    "anzemet",
    "apidra",
    "apokyn",
    "aprepitant",
    "apresoline",
    "aptivus",
    "aranesp",
    "arcapta neohaler",
    "aredia",
    "argatroban",
    "aricept",
    "arimidex",
    "aripcept",
    "arixtra",
    "armasin",
    "aromasin",
    "arranon",
    "arsenic trioxide",
    "arzerra",
    "asmanex",
    "atacand",
    "atamet",
    "atenolol",
    "atgam",
    "ativan",
    "atripla",
    "atrovent",
    "atrovent/atrovent hfa atrovent (nasal)",
    "aubagio",
    "avalide",
    "avandia",
    "avapro",
    "avastin",
    "avenox",
    "avonex",
    "axitinib",
    "azasan",
    "azathioprine",
    "azilect",
    "azmacort",
    "azor",
    "baclofen",
    "banzel",
    "baraclude",
    "bcalofen",
    "bcg live",
    "belbuca",
    "belimumab",
    "benadryl",
    "benazepril hcl",
    "benazepril",
    "benicar",
    "benlysta",
    "benztropine mesylate",
    "benztropine",
    "betapace",
    "betaseron",
    "betaxolol hcl",
    "bevacizumab",
    "bevespi aerosphere",
    "bexarotene",
    "bexxar",
    "bicalutamide",
    "bicnu",
    "bidil",
    "bisoprolol fumarate",
    "blenoxane",
    "bleomycin sulphate",
    "bleomycin",
    "blocadren",
    "bravona",
    "breo ellipta",
    "breo-ellipta",
    "breo",
    "brevibloc",
    "brilinta",
    "bromocriptine mesylate",
    "bromocriptine",
    "brovana",
    "budesonide",
    "builtricide",
    "bumatanide",
    "bumetadine",
    "bumetanide",
    "bumex",
    "buminate",
    "buprenex",
    "buprenorphine sl",
    "buprenorphine-naloxone",
    "buproban",
    "busulflex",
    "bydureon",
    "byetta",
    "bystolic",
    "caduet",
    "calan",
    "calcijex",
    "calcitriol",
    "calcium acetate",
    "calcium acetrate",
    "calcium folinate",
    "campath",
    "campral",
    "camptosar",
    "capecitabine",
    "capoten",
    "capozide",
    "caprelsa",
    "captopril",
    "carbamazepine",
    "carbatrol",
    "carbidopa-levadopa",
    "carbidopa-levodopa",
    "carbidopa",
    "carboplatin",
    "cardioplegic",
    "cardizem",
    "cardura",
    "carmustine",
    "carnitor",
    "cartia",
    "cartrol",
    "carvedilol",
    "casodex",
    "catapress",
    "ceenu",
    "celebrex",
    "cellcept",
    "celontin",
    "cerubidine",
    "cesamet",
    "cetuximab",
    "chantix",
    "chlorambucil",
    "chlordiazepoxide",
    "chlorpromazine hcl",
    "chlorpromazine",
    "chlorpropamide",
    "chlorthalidone",
    "cilostazol",
    "cinacalet",
    "cisplatin",
    "citalopram",
    "cladribine",
    "clolar",
    "clonazepam",
    "clopidogrel",
    "clorazepate dipotassium",
    "clozapine",
    "clozaril",
    "cogentin",
    "cognex",
    "colesevelam",
    "combivent",
    "combivir",
    "complera",
    "comtan",
    "constulose",
    "copaxone",
    "copegus",
    "cordarone",
    "coreg",
    "corgard",
    "cortef",
    "cortisone",
    "cosmegen",
    "coumadin",
    "cozaar",
    "crixivan",
    "crizotinib",
    "crofelemer",
    "cuprimine",
    "cyclophosphamide",
    "cycloset",
    "cyclosporine modified",
    "cyclosporine",
    "cyproheptadine",
    "cystagon",
    "cytarabine",
    "cytogam",
    "cytosar-u",
    "cytovene",
    "cytoxan",
    "dacarbazine",
    "dacogen",
    "dactinomycin",
    "daliresp",
    "dantrium",
    "dantrolene",
    "dasatinib",
    "daunorubicin hcl",
    "daunoxome",
    "degarelix",
    "delatestryl",
    "delestrogen",
    "demadex",
    "denosumab",
    "depacon",
    "depade",
    "depakene",
    "depakote sprinkles",
    "depakote",
    "depo-estradiol",
    "depo-provera",
    "depo-testosterone",
    "depocyt",
    "dexamethasone",
    "dexrazoxane",
    "diabeta",
    "diabinese",
    "diazepam intensol",
    "diazepam",
    "diazoxide",
    "didanosine",
    "digitek",
    "digoxin",
    "dilacor",
    "dilantin",
    "dilatrate sr",
    "dilor",
    "diltiazem",
    "diovan",
    "diphen",
    "diphenhydramine",
    "disufram",
    "disulfiram",
    "divalproex",
    "dobutamine hcl",
    "dobutamine",
    "docefrez",
    "docetaxel",
    "dolophine",
    "donepezil hcl",
    "donepezil",
    "dopamine",
    "dornase alpha",
    "doxil",
    "doxorubicin hcl",
    "doxorubicin",
    "drisdol",
    "dronabinol",
    "dronedarone",
    "droxia",
    "dtic-dome",
    "duetact",
    "dulera",
    "duoneb",
    "dyazide",
    "dynacirc",
    "dyphylline guaifenesin",
    "dyrenium",
    "edecrin",
    "edurant",
    "effient",
    "eldepryl",
    "eligard",
    "eliphos",
    "eliquis",
    "elitek",
    "ellence",
    "eloxatin",
    "elspar",
    "emcyt",
    "emend",
    "eminase",
    "emsam",
    "emtriva",
    "enalapril maleate",
    "enalaprilat",
    "enbrel",
    "enoxaparin sodium",
    "enoxaparin",
    "entecavir",
    "entresto",
    "enulose",
    "epiklor",
    "epirubicin",
    "epitol",
    "epivir hbv",
    "epivir",
    "epizicom",
    "eplerenone",
    "epogen",
    "epvir",
    "epzicom",
    "equetro",
    "erbitux",
    "ergoloid mesylates",
    "erlotinib",
    "eskalith",
    "esmolol hcl",
    "esterifed estrogens",
    "estinyl",
    "estrace",
    "estradiol valerate",
    "estradiol",
    "estramustine",
    "esylate",
    "ethosuximide",
    "ethotoin",
    "ethyol",
    "etopophos",
    "etoposide phosphate",
    "etoposide",
    "eulexin",
    "everolimus",
    "evista",
    "evzio",
    "exelon",
    "exemestane",
    "exenatide",
    "exforge",
    "ezogabine",
    "fanatrex",
    "fareston",
    "farxiga",
    "faslodex",
    "felbamate",
    "felbatol",
    "felodipine",
    "femara",
    "fentanyl citrate",
    "fentora",
    "filgrastim",
    "firmagon",
    "flagyl",
    "flecainide",
    "flexbumin",
    "floscavir",
    "flovent",
    "floxuridine",
    "fludara",
    "fludarabine phosphate",
    "fluorouracil",
    "fluoxymesterone",
    "flutamide",
    "fluticasone salmeterol",
    "fluticasone",
    "folotyn",
    "fomepizole",
    "foradil aerolizer",
    "formoterol fumarate",
    "fortamet",
    "fortesta",
    "fortovase",
    "foscarnet sodium",
    "foscavir",
    "fosinopril sodium",
    "fosinopril",
    "fosphenytoin",
    "fosrenol",
    "fragmin",
    "fudr",
    "fulyzaq",
    "furosemide",
    "fusilev",
    "fuzeon",
    "gabapentin",
    "gabitril",
    "galantamine",
    "gallium nitrate",
    "galzin",
    "gammagard",
    "gamunex",
    "ganciclovir",
    "ganite",
    "gemcitabine",
    "gemzar",
    "generlac",
    "gengraf",
    "geoden",
    "geodon",
    "gilenya",
    "gleevec",
    "gliadel wafer",
    "glimepiride",
    "glipizide-metformin",
    "glipizide",
    "glucophage",
    "glucotrol",
    "glucovance",
    "glumetza",
    "glyburide-metformin",
    "glyburide",
    "glynase",
    "glyset",
    "goserelin",
    "granisetron hcl",
    "granisetron",
    "granisol",
    "halaven",
    "haldol",
    "haloperidol",
    "halotestin",
    "halperidol",
    "halperidone",
    "harvoni",
    "hctz",
    "hctz/triamterene",
    "hecoria",
    "hectoral",
    "hectorol",
    "heparin",
    "hepsera",
    "herceptin",
    "hexalen",
    "histrelin",
    "hivid",
    "horizant",
    "humalog",
    "humira",
    "humulin",
    "hycamtin",
    "hydergine",
    "hydralazine hcl",
    "hydralazine",
    "hydrea",
    "hydrobromide",
    "hydrochlorothiazide",
    "hydroxychloroquine",
    "hydroxyurea",
    "hydroxyzine",
    "hyperstat iv",
    "hytrin",
    "hyzaar",
    "ibrutinib",
    "idamycin pfs",
    "idarubicin",
    "ifex",
    "ifex/mesnex combo pack",
    "ifosfamide-mesna",
    "ifosfamide",
    "iletin",
    "imatinib",
    "imbruvica",
    "imdir",
    "imdur",
    "imuran",
    "inamrinone",
    "incivek",
    "inderal",
    "inderide",
    "infergen",
    "inlyta",
    "innopran xl",
    "inspra",
    "insulin glargine-human recombinant analog",
    "insulin glargine",
    "insulin prior to age 50",
    "insulin",
    "intelence",
    "interferon alpha-2b",
    "interferon",
    "intron-a",
    "intron",
    "invega",
    "invirase",
    "invokana",
    "ipratropium albuterol",
    "ipratropium bromide",
    "irbesartan",
    "iressa",
    "irinotecan",
    "ismo",
    "isochron",
    "isodax",
    "isoptin",
    "isordil",
    "isosorbide & hydralazine",
    "isosorbide dinitrate",
    "isosorbide dinitrate/mononitrate",
    "isosorbide mononitrate",
    "isosorbide",
    "isosxsuprine",
    "ixempra",
    "jantoven",
    "janumet",
    "januvia",
    "jardiance",
    "jentadueto",
    "jetvana",
    "juvisunc",
    "kaletra",
    "kalydeco",
    "kedbumin",
    "kemadrin",
    "kenalog",
    "kepivance",
    "keppra",
    "kerlone",
    "ketoconazole",
    "klonopin",
    "kombiglyze",
    "kristalose",
    "kytril",
    "labetalol",
    "labetaolol",
    "lacosamide",
    "lactulose",
    "lamictal",
    "lamivudine-zidovudine",
    "lamivudine",
    "lamotrigine",
    "lamtrogine",
    "lanoxicaps",
    "lanoxin",
    "lantus",
    "lapatinib",
    "laradopa",
    "larodopa",
    "lasix",
    "latuda",
    "ledipasvir-sofosbuvir",
    "lenalidomide",
    "letrozole",
    "leucovorin calcium",
    "leucovorine",
    "leukeran",
    "leukine",
    "leuprolide",
    "leustatin",
    "levamisole hcl",
    "levatol",
    "levemir",
    "levetiracetam",
    "levocarnitine",
    "levodopa",
    "levolecucovorin calcium",
    "lexiva",
    "lexxel",
    "limbitrol",
    "linagliptin-metformin",
    "linagliptin",
    "lipitor",
    "lipodox",
    "lipraglutide",
    "lisinopril",
    "lithium",
    "lodosyn",
    "lopressor",
    "lorazepam intensol",
    "lorazepam",
    "losartan potassium",
    "losartan",
    "lotensin",
    "lotrel",
    "lovenox",
    "loxapine",
    "loxitane",
    "lozol",
    "lupron depot",
    "lupron",
    "lupton",
    "lyrica",
    "lysodren",
    "lytensopril",
    "magestrol",
    "makena",
    "marijuana",
    "marinol",
    "matulane",
    "mavik",
    "maxair",
    "maxzide",
    "mechlorethamine",
    "Medication",
    "medication",
    "medrol",
    "medroxyprogesterone",
    "megace",
    "megestrol acetate",
    "megestrol",
    "mellaril",
    "melphalan hydrochloride",
    "melphalan",
    "memantine",
    "menest",
    "mepron",
    "mercaptopurine",
    "mesna",
    "mesnex",
    "metformin",
    "methadone",
    "methadose",
    "methitest",
    "methotrexate",
    "methsuximide",
    "methyldopa",
    "methylprednisolone",
    "methyltestosterone",
    "metolazone",
    "metoprolol hctz",
    "metoprolol succinate",
    "metoprolol tartrate",
    "metoprolol tartrate/succinate",
    "metronidazole",
    "mevacor",
    "mexiletine",
    "micardis",
    "micronase",
    "microzide",
    "midamor",
    "miglitol",
    "milrinone",
    "minipress",
    "minitran",
    "mirapex",
    "mithracin",
    "mitomycin",
    "mitotane",
    "mitoxantrone hcl",
    "moban",
    "moduretic",
    "moexipril hcl",
    "mometasone",
    "monoket",
    "monopril",
    "montelukast",
    "morphine sulfate",
    "multaq",
    "mustargen",
    "mutamycin",
    "mycobutin",
    "mycophenolate mofetil",
    "myfortic",
    "mykrok",
    "myleran",
    "mylocel",
    "mylotarg",
    "mysoline",
    "nabi-hb",
    "nadolol",
    "naloxone hcl",
    "naloxone",
    "naltrexone hcl",
    "naltrexone microspheres",
    "naltrexone",
    "namenda",
    "narcan",
    "narcan/naloxone/naltrexone",
    "nateglinide",
    "natrecor",
    "navane",
    "navelbine",
    "navene",
    "nebivolol",
    "nebupent",
    "neo-fradin",
    "neomycin",
    "neoral",
    "neosar",
    "nephrocaps",
    "nesiritide",
    "neulasta",
    "neumega",
    "neupogen",
    "neupro",
    "neurontin",
    "neutrexin",
    "nexavar",
    "nicoderm",
    "nicorette",
    "nicotine",
    "nicotrol",
    "nifediac",
    "nifedical",
    "nifedipine",
    "nilandron",
    "nilutamide",
    "nimodipine",
    "nimotop",
    "nintedanib",
    "nipent",
    "nitrek",
    "nitro-bid",
    "nitro-dur",
    "nitro",
    "nitroglycerin",
    "nitroglycerine",
    "nitroglycerine/nitrota b/nitroquick/nitrostat",
    "nitrol",
    "nitrolingual",
    "nitromist",
    "nitropress",
    "nitroquick",
    "nitrostat",
    "nolvadex",
    "normodyne",
    "norpace",
    "norvasc",
    "norvir",
    "novanitrone",
    "novolin",
    "novolog",
    "noxafil",
    "octreotide acetate",
    "ofev",
    "oforta",
    "olanzapine",
    "olysio",
    "omontys",
    "oncaspar",
    "ondansetron",
    "onglyza",
    "onsolis",
    "ontak",
    "onxol",
    "orthoclone okt3",
    "oseni",
    "oxaliplatin",
    "oxazepam",
    "oxcarbazepine",
    "oxygen",
    "pacerone",
    "paclitaxel",
    "pamidronate disodium",
    "pamidronate",
    "panretin",
    "papaverine",
    "paraplatin",
    "parcopa",
    "paricalcitol",
    "parlodel",
    "paromomycin",
    "paxil",
    "pazopanib",
    "peg-intron",
    "peganone",
    "pegasys",
    "peginterferon",
    "pegintron",
    "pemetrexed",
    "pentam 300",
    "pentamidine isethionate",
    "pentostatin",
    "pentoxifylline",
    "pepcid",
    "perforomist",
    "pergolide mesylate",
    "perindopril erbumine",
    "permax",
    "perphenazine",
    "phenobarbital",
    "phenytek",
    "phenytoin sodium",
    "phenytoin",
    "phoslo",
    "phoslyra",
    "photofrin",
    "pindolol",
    "pioglitazone-glimepiride",
    "pioglitazone-metformin",
    "pioglitazone",
    "plaquenil",
    "plasbumin",
    "platinol aq",
    "plavix",
    "plegisol",
    "plenaxis",
    "plendil",
    "pletal",
    "porfimer",
    "potiga",
    "pradaxa",
    "pramipexole",
    "pramlintide",
    "prandimet",
    "prandin",
    "pravachol",
    "praziquantel",
    "prazosin",
    "precose",
    "pregabalin",
    "premarin",
    "prezista",
    "primacor",
    "primasol",
    "primidone",
    "prinivil",
    "prinzide",
    "prismasol",
    "proair",
    "procarbazine",
    "procardia",
    "prochlorperazine",
    "procrit",
    "prograf",
    "proleukin",
    "prolixin",
    "propafenone",
    "propanolol hcl",
    "propranolol",
    "provenge",
    "proventil",
    "prozac",
    "pulmicort",
    "pulmozyme",
    "purinethol",
    "quadramet",
    "quetiapine",
    "quinapril",
    "quinaretic",
    "quinidine",
    "qvar",
    "ramipril",
    "ranexa",
    "ranitidine",
    "rapamune",
    "razadyne",
    "rebetol",
    "rebetron",
    "rebif",
    "reclast",
    "reglan",
    "remicade",
    "reminyl",
    "renagel",
    "renvela",
    "repaglinide-metformin",
    "repaglinide",
    "requip",
    "rescriptor",
    "retrovir",
    "revex",
    "revia",
    "revlimid",
    "revonto",
    "reyataz",
    "rheumatrex",
    "ribapak",
    "ribasphere",
    "ribatab",
    "ribaviran",
    "ribavirin",
    "rifaximin",
    "rilutek",
    "riluzole",
    "riomet",
    "risperdal",
    "risperdone",
    "risperidone",
    "rituxan",
    "rituximab",
    "rivaroxaban",
    "rivastigmine tartrate",
    "rocaltrol",
    "roferon-a",
    "roferon",
    "roflumilast",
    "ropinirole",
    "rubex",
    "rufinamide",
    "rythmol",
    "sabril",
    "salagen",
    "sancuso",
    "sandimmune",
    "sandostatin",
    "saphris",
    "saxagliptin-metformin",
    "saxagliptin",
    "sectral",
    "selegiline hcl",
    "selzentry",
    "sensipar",
    "serevent",
    "seroquel",
    "serzone",
    "sevelamer",
    "simulect",
    "simvastatin",
    "sinemet",
    "sinemet/sinemet cr",
    "sitagliptin-metformin",
    "sitagliptin-simvistatin",
    "sitagliptin",
    "slameterol",
    "sodium edecrin",
    "sofosbuvir",
    "soltalol hydrochloride",
    "soltamox",
    "sorafenib",
    "sorine",
    "sotalol hcl",
    "sotalol",
    "sovaldi",
    "spiriva",
    "spirivia",
    "spironolactone-hydrochlorothiazide",
    "spironolactone",
    "sprycel",
    "stalevo",
    "starlix",
    "stavzor",
    "stelazine",
    "stilphostrol",
    "stiolto respimat",
    "stiolto",
    "stivarga",
    "streptozocin",
    "stribild",
    "striverdi respimat",
    "sublimaze",
    "suboxone",
    "subutex",
    "sulfadiazine",
    "sunitinib",
    "supprelin",
    "sustiva",
    "sutent",
    "symbicort",
    "symbyax",
    "symlin",
    "symmetrel",
    "syprine",
    "tabloid",
    "tacrolimus",
    "tagamet",
    "tambocor",
    "tamoxifen",
    "tarceva",
    "targretin",
    "tarka",
    "tasigna",
    "tasmar",
    "taxol",
    "taxotere",
    "taztia",
    "tegretol",
    "telmisartan",
    "temodar",
    "temozolomide",
    "temsirolimus",
    "tenex",
    "tenoretic",
    "tenormin",
    "teslac",
    "testopel",
    "testosterone cypionate",
    "testosterone enanthate",
    "testred",
    "teveten",
    "thalomid",
    "theo-24",
    "theochron",
    "theodur",
    "theophylline",
    "theracys",
    "thioplex",
    "thioridazine",
    "thiotepa",
    "thiothixene",
    "thorazine",
    "thymoglobulin",
    "tiagabine",
    "tiazac",
    "tice bcg",
    "ticlid",
    "tikosyn",
    "tilade",
    "timolide",
    "timolol maleate",
    "tiotropium bromide-olodaterol hcl",
    "tiotropium bromide",
    "tivicay",
    "tizanidine",
    "tolazamide",
    "tolbutamide",
    "tolinase",
    "topamax",
    "topiragen",
    "topiramate",
    "topomax",
    "toposar",
    "topotecan",
    "toprol xl",
    "toprol",
    "torisel",
    "torsemide",
    "totect",
    "toujeo",
    "tradjenta",
    "trandate",
    "trandolapril",
    "tranxene t-tab",
    "trastuzumab",
    "treanda",
    "trelegy ellipta",
    "trelstar",
    "trental",
    "tresiba",
    "tretinoin",
    "trexall",
    "triamterene",
    "triamterene/hctz",
    "tribenzor",
    "trihexyphenidyl hcl",
    "trihexyphenidyl",
    "trilafon",
    "trileptal",
    "triptorelin pamoate",
    "trisenox",
    "trizivir",
    "truvada",
    "tudorza pressair",
    "twynsta",
    "tykerb",
    "tysabri",
    "tyzeka",
    "uniretic",
    "univasc",
    "urso forte",
    "ursodiol",
    "utibron neohaler",
    "uvadex",
    "valcyte",
    "valium",
    "valproate sodium",
    "valproic acid",
    "valrubicin",
    "valsartan-sacubitril",
    "valsartan",
    "valstar",
    "valturna",
    "vantas",
    "varenicline",
    "vascor",
    "vaseretic",
    "vasotec",
    "velcade",
    "ventolin",
    "vepisid",
    "verapamil",
    "verelan",
    "vesanoid",
    "viadur",
    "viaspan",
    "victoza",
    "victrelis",
    "vidaza",
    "videx",
    "vigabatrin",
    "vimpat",
    "vinblastine sulfate",
    "vinblastine",
    "vincasar pfs",
    "vincasar",
    "vincristine sulfate",
    "vincristine",
    "vinorelbine tartrate",
    "viracept",
    "viramune",
    "viread",
    "visken",
    "vistide",
    "vivitrol",
    "votrient",
    "vumon",
    "warfarin",
    "welchol",
    "xalkori",
    "xarelto",
    "xeljanz",
    "xeloda",
    "xgeva",
    "xifaxan",
    "xopenex",
    "zafirlukast",
    "zanaflex",
    "zanosar",
    "zantac",
    "zarontin",
    "zaroxolyn",
    "zebeta",
    "zelapar",
    "zemplar",
    "zenapax",
    "zerit",
    "zestoretic",
    "zestril",
    "zevalin y-90",
    "ziac",
    "ziagen",
    "zidovudine",
    "zinecard",
    "zocor",
    "zofran",
    "zoladex",
    "zoledronic acid",
    "zolinza",
    "zoloft",
    "zometa",
    "zometra",
    "zonegran",
    "zonisamide",
    "zortress",
    "zuplenz",
    "zyban",
    "zyprexa",
    "zytiga"
]

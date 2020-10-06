(function (e) {
    function t(t) {
        for (var n, i, s = t[0], r = t[1], u = t[2], d = 0, l = []; d < s.length; d++) i = s[d], Object.prototype.hasOwnProperty.call(c, i) && c[i] && l.push(c[i][0]), c[i] = 0;
        for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        f && f(t);
        while (l.length) l.shift()();
        return o.push.apply(o, u || []), a()
    }

    function a() {
        for (var e, t = 0; t < o.length; t++) {
            for (var a = o[t], n = !0, i = 1; i < a.length; i++) {
                var s = a[i];
                0 !== c[s] && (n = !1)
            }
            n && (o.splice(t--, 1), e = r(r.s = a[0]))
        }
        return e
    }
    var n = {},
        i = {
            app: 0
        },
        c = {
            app: 0
        },
        o = [];

    function s(e) {
        return r.p + "static/js/" + e + "." + {
            "chunk-09d2ba7e": "83247b6fc133b8a5fb34",
            "chunk-0a25f00e": "2e80506cce40aa869529",
            "chunk-1c070aac": "58c7f493755501759a4d",
            "chunk-2c97b0ec": "2ee2da32a92750b47603",
            "chunk-2c9cbf7d": "6136b554dd309a9aa381",
            "chunk-2d229604": "8605e7faeb434f2fdf18",
            "chunk-419ae960": "313daafb45de3806dd36",
            "chunk-42d3cef2": "ed015e406e60db30adf2",
            "chunk-51041bd2": "345655af88ede54c5273",
            "chunk-7439b4d6": "fadf4b9ef8babd0f05cb",
            "chunk-776b50b1": "1c1427e37d0e43522111",
            "chunk-7b2d3c6c": "8a9bb57e4c3332c47242",
            "chunk-90b62210": "508b12b1684f9c039d54",
            "chunk-917a1616": "2aadfe1f8318d9dc1131",
            "chunk-93d6ec30": "7421df4beb1651c5b9e0",
            "chunk-52646bf4": "ec1f08b941a72bd91cca",
            "chunk-03c1e51b": "302c325c70195b0894a6",
            "chunk-064faaa6": "ee54895fe74fb49a0862",
            "chunk-0a0940d2": "6896f54025de9fa20a24",
            "chunk-0bf7f9ff": "43eb8b5f60cb87c5f3d9",
            "chunk-0f5c621f": "153f7fa113032be8ee5e",
            "chunk-18614acc": "218003bec928fe7cb9f8",
            "chunk-1865ea2a": "cc96c216c396a1622b68",
            "chunk-1a4f056d": "f5faa1d9ce8f12b03752",
            "chunk-1ad4b1ee": "8edf0b993beb5baadc88",
            "chunk-1e851f9b": "947ca11afe0520505e76",
            "chunk-1f7f9f18": "b20df9deca037e5ed27d",
            "chunk-1fea3aa2": "d775c6e66ef2e6578094",
            "chunk-205b3c0c": "791aaceb7933abf6562e",
            "chunk-23d4be1a": "dc62722884d321c5e58b",
            "chunk-2415628e": "f7f4220c4d56a74f7f90",
            "chunk-2b9bd79e": "f71d669ab77298e6a25a",
            "chunk-2d0b6e7a": "607ce00c99851e388b38",
            "chunk-2d0b95da": "23f405236c033f2a6b92",
            "chunk-2d182ed7": "d82d3a24eb7badd5db6f",
            "chunk-2f2ca2ce": "ef33f8021e6478c03fda",
            "chunk-31df845a": "4e5aa267cf57878b9461",
            "chunk-32ff8ac2": "64bfbb516a93f6c9481b",
            "chunk-6b05f859": "eef72d436e1b4eb2054e",
            "chunk-36210c95": "44b90ed088d2eca017c9",
            "chunk-3a7e2760": "f233da78c4d1499dff02",
            "chunk-3b1ce5d8": "50feda6db335cde8719b",
            "chunk-3bce6238": "9d594d81cdcbff92f9b3",
            "chunk-3d9d0e28": "11c528e8ee91535f63fa",
            "chunk-3ec117f6": "9eddcb3abc54188d712b",
            "chunk-43a507d9": "339e462d322a1ac956e0",
            "chunk-46c92a3d": "f3346cf786a31f511928",
            "chunk-47957392": "c4469b9b0bf3c713c521",
            "chunk-47a04560": "60f3c5529497a2efd00f",
            "chunk-4888bb2e": "e7023c0cdb2e29b04482",
            "chunk-4a6d8cf0": "abe69a11f7a6a7f6e440",
            "chunk-4ec92e32": "843442f254092fddd239",
            "chunk-4fe55158": "50690c94332dcd9fe3f5",
            "chunk-520a8c66": "cebe6af3f7ae0638bae6",
            "chunk-5331590c": "761133d260a13421a1da",
            "chunk-57e6a106": "c977e39df51aed79c9ce",
            "chunk-582f4b2a": "315e8454c3e1d925007d",
            "chunk-58f1df36": "ab72f0ed5698c1aa74f6",
            "chunk-5912e734": "82261c12bf325803240a",
            "chunk-59afd22a": "b4de09263c3f6eaec79e",
            "chunk-59b7ffc8": "2b7e789824652033b014",
            "chunk-5c8a8beb": "135fab1fd6794fd87f4d",
            "chunk-5d2111d6": "518b43fc57d044b6132c",
            "chunk-621d2e04": "055afdcdb1a5448b6a23",
            "chunk-6de5407c": "f5d0086bce126e97e1f8",
            "chunk-7273b22c": "bb43d908b59acc30c289",
            "chunk-14c4ad9f": "b1cfb6a289ffd5cd2230",
            "chunk-72e7daef": "8bdb980eb31c4d562735",
            "chunk-73d0c6bf": "a160197de318849c193d",
            "chunk-7575032e": "a48ef6c72109bc5f11b3",
            "chunk-785926d5": "e41072fa0ebd0af213d6",
            "chunk-795a3056": "12240606dc2dc864ad23",
            "chunk-7ee05792": "24b52ff884ac76b0e110",
            "chunk-7f923980": "0cf47ff32a30fcc2eb92",
            "chunk-82f932e8": "58f8e7b86b54810c83b2",
            "chunk-85f1646a": "4d349e1b75ed7415ccca",
            "chunk-86cd8e92": "9c2631a895f530457c05",
            "chunk-89ce40fe": "6bf7a2779e606baa3436",
            "chunk-9c8a29d2": "631aa91cc1a42c8392f8",
            "chunk-9cec785e": "617297176222716e445e",
            "chunk-a36a538e": "dac819d686009b92fcc1",
            "chunk-ac762624": "b82890c6773d39c781d2",
            "chunk-b45af54e": "9877bfe1a93a6c329eff",
            "chunk-bed30930": "fa4a70bccff8956f3d7d",
            "chunk-cc8775f0": "576ccb98243d65abdcec",
            "chunk-cd91c9d4": "84118e0d1742d14d5c99",
            "chunk-d101f7ee": "baeaa4199f5f2760fa47",
            "chunk-d2260cfa": "5bf355dbf4aa5c7df850",
            "chunk-d89427e4": "4f8bed7b535959c03509",
            "chunk-dde75352": "135e944fd97451bc3aa5",
            "chunk-e9f20a10": "991ae59d9e72fb495c80",
            "chunk-06fc6ba5": "41e7262c697611c78164",
            "chunk-388c8778": "a05281f4692176564c7d",
            "chunk-483ecc60": "4ff774b38bef2eab7b04",
            "chunk-666c87a3": "3c20a777bf8880b3ee00",
            "chunk-f0adbe10": "434f9ad85893a04797db",
            "chunk-052d0b21": "275a7c81b2d983c5f46f",
            "chunk-06cfb6e6": "1fa092a8c7a00a5a9eb5",
            "chunk-08d235f6": "76b2f1cdcb7eb2b35cb1",
            "chunk-252e2bbc": "83c26f9f384599ca8cfc",
            "chunk-35ad88fb": "737cd240097efd5c0a0d",
            "chunk-43d43526": "b867f0acb9df2241c271",
            "chunk-4565e728": "2f8875f9422fc1e024d8",
            "chunk-0a79695e": "00e13101dcd29deee469",
            "chunk-0ecf62f0": "e6585389962eb05930ba",
            "chunk-2f1451e7": "246d96bdb3b8917f96ad",
            "chunk-31cff43a": "70ba848d12b29556275b",
            "chunk-377f3f1b": "eecd9a8799671d9ca27f",
            "chunk-3eda52b8": "5ae66997f0e459f4b708",
            "chunk-5d1b7111": "1ccf9a01c75b8ac16220",
            "chunk-5f55b6e0": "c9698b9d55ad13f2aa63",
            "chunk-6696147b": "88f6195750eb855d55b3",
            "chunk-68a5d9e5": "2f658b9bbd81dc55fa19",
            "chunk-72a90a08": "5f9ee0fd26b4dad6b3cd",
            "chunk-738f2e6a": "849655e40d96b09333b3",
            "chunk-81dc265e": "e0bc8852f9259fce7200",
            "chunk-cd0796ca": "e34ab461e39eff43c19e",
            "chunk-e2341a3c": "ba6793796a84f12e78cd",
            "chunk-be6aa578": "8619d42a74957ab4e17b",
            "chunk-f47f9924": "4662adf7aba24dfe9fab",
            "chunk-f48fd4fa": "fb42b04b9fd6ec20e81b",
            "chunk-f532982c": "a4eb81127f3afc44bc0d",
            "chunk-6cb65fec": "ec32710d5b38cfc51fa7",
            "chunk-aa35b9cc": "6d15b7290da613c716a4",
            "chunk-d33ff21e": "14c3c7f63dc01a4f11a9",
            "chunk-d6d048b4": "553374e89d8ab9edd381",
            "chunk-daada084": "f866d2b80d1ae9f08c94"
        } [e] + ".js?v=1601431911661"
    }

    function r(t) {
        if (n[t]) return n[t].exports;
        var a = n[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(a.exports, a, a.exports, r), a.l = !0, a.exports
    }
    r.e = function (e) {
        var t = [],
            a = {
                "chunk-09d2ba7e": 1,
                "chunk-0a25f00e": 1,
                "chunk-1c070aac": 1,
                "chunk-2c97b0ec": 1,
                "chunk-2c9cbf7d": 1,
                "chunk-419ae960": 1,
                "chunk-42d3cef2": 1,
                "chunk-51041bd2": 1,
                "chunk-7439b4d6": 1,
                "chunk-776b50b1": 1,
                "chunk-7b2d3c6c": 1,
                "chunk-90b62210": 1,
                "chunk-917a1616": 1,
                "chunk-52646bf4": 1,
                "chunk-03c1e51b": 1,
                "chunk-064faaa6": 1,
                "chunk-0a0940d2": 1,
                "chunk-0bf7f9ff": 1,
                "chunk-18614acc": 1,
                "chunk-1865ea2a": 1,
                "chunk-1a4f056d": 1,
                "chunk-1ad4b1ee": 1,
                "chunk-1e851f9b": 1,
                "chunk-1f7f9f18": 1,
                "chunk-1fea3aa2": 1,
                "chunk-205b3c0c": 1,
                "chunk-23d4be1a": 1,
                "chunk-2415628e": 1,
                "chunk-2b9bd79e": 1,
                "chunk-2d182ed7": 1,
                "chunk-2f2ca2ce": 1,
                "chunk-31df845a": 1,
                "chunk-6b05f859": 1,
                "chunk-36210c95": 1,
                "chunk-3a7e2760": 1,
                "chunk-3b1ce5d8": 1,
                "chunk-3bce6238": 1,
                "chunk-3d9d0e28": 1,
                "chunk-3ec117f6": 1,
                "chunk-43a507d9": 1,
                "chunk-46c92a3d": 1,
                "chunk-47957392": 1,
                "chunk-47a04560": 1,
                "chunk-4888bb2e": 1,
                "chunk-4a6d8cf0": 1,
                "chunk-4ec92e32": 1,
                "chunk-4fe55158": 1,
                "chunk-5331590c": 1,
                "chunk-57e6a106": 1,
                "chunk-58f1df36": 1,
                "chunk-5912e734": 1,
                "chunk-59afd22a": 1,
                "chunk-59b7ffc8": 1,
                "chunk-5c8a8beb": 1,
                "chunk-5d2111d6": 1,
                "chunk-621d2e04": 1,
                "chunk-6de5407c": 1,
                "chunk-7273b22c": 1,
                "chunk-14c4ad9f": 1,
                "chunk-72e7daef": 1,
                "chunk-73d0c6bf": 1,
                "chunk-7575032e": 1,
                "chunk-785926d5": 1,
                "chunk-795a3056": 1,
                "chunk-7ee05792": 1,
                "chunk-7f923980": 1,
                "chunk-82f932e8": 1,
                "chunk-85f1646a": 1,
                "chunk-86cd8e92": 1,
                "chunk-89ce40fe": 1,
                "chunk-9c8a29d2": 1,
                "chunk-9cec785e": 1,
                "chunk-a36a538e": 1,
                "chunk-ac762624": 1,
                "chunk-b45af54e": 1,
                "chunk-bed30930": 1,
                "chunk-cc8775f0": 1,
                "chunk-cd91c9d4": 1,
                "chunk-d101f7ee": 1,
                "chunk-d2260cfa": 1,
                "chunk-d89427e4": 1,
                "chunk-dde75352": 1,
                "chunk-e9f20a10": 1,
                "chunk-06fc6ba5": 1,
                "chunk-388c8778": 1,
                "chunk-483ecc60": 1,
                "chunk-666c87a3": 1,
                "chunk-052d0b21": 1,
                "chunk-06cfb6e6": 1,
                "chunk-08d235f6": 1,
                "chunk-252e2bbc": 1,
                "chunk-35ad88fb": 1,
                "chunk-43d43526": 1,
                "chunk-4565e728": 1,
                "chunk-0a79695e": 1,
                "chunk-0ecf62f0": 1,
                "chunk-2f1451e7": 1,
                "chunk-31cff43a": 1,
                "chunk-377f3f1b": 1,
                "chunk-3eda52b8": 1,
                "chunk-5d1b7111": 1,
                "chunk-5f55b6e0": 1,
                "chunk-6696147b": 1,
                "chunk-68a5d9e5": 1,
                "chunk-72a90a08": 1,
                "chunk-738f2e6a": 1,
                "chunk-81dc265e": 1,
                "chunk-cd0796ca": 1,
                "chunk-e2341a3c": 1,
                "chunk-be6aa578": 1,
                "chunk-f47f9924": 1,
                "chunk-f48fd4fa": 1,
                "chunk-f532982c": 1,
                "chunk-6cb65fec": 1,
                "chunk-aa35b9cc": 1,
                "chunk-d33ff21e": 1,
                "chunk-d6d048b4": 1,
                "chunk-daada084": 1
            };
        i[e] ? t.push(i[e]) : 0 !== i[e] && a[e] && t.push(i[e] = new Promise((function (t, a) {
            for (var n = "static/css/" + ({} [e] || e) + "." + {
                    "chunk-09d2ba7e": "186b98b73f4bcf9f1dc0",
                    "chunk-0a25f00e": "75d1a0948a7dc623c242",
                    "chunk-1c070aac": "6e537cfa06a33e11b6c0",
                    "chunk-2c97b0ec": "fb985c06caa4a41c3e8f",
                    "chunk-2c9cbf7d": "89fda625b885125e1ebf",
                    "chunk-2d229604": "31d6cfe0d16ae931b73c",
                    "chunk-419ae960": "4e224ae7b3b8f51efd91",
                    "chunk-42d3cef2": "fab39af0c8091481ae76",
                    "chunk-51041bd2": "89125cfe26500601d45a",
                    "chunk-7439b4d6": "47ff47eacc45f6968ebb",
                    "chunk-776b50b1": "d54cb4463a1c4f1953ee",
                    "chunk-7b2d3c6c": "a99834a8db1c78f4dae3",
                    "chunk-90b62210": "06023478c22ef9c46b5b",
                    "chunk-917a1616": "045af383b3b04006ac3f",
                    "chunk-93d6ec30": "31d6cfe0d16ae931b73c",
                    "chunk-52646bf4": "4471754de833e3d09388",
                    "chunk-03c1e51b": "011181655655c90992e5",
                    "chunk-064faaa6": "a6e20eab7763e9710731",
                    "chunk-0a0940d2": "34fc823dedfa4329ad30",
                    "chunk-0bf7f9ff": "bd84f080dc4cb8f7f400",
                    "chunk-0f5c621f": "31d6cfe0d16ae931b73c",
                    "chunk-18614acc": "dcf38c9e67e97e700d68",
                    "chunk-1865ea2a": "ac7cff19ae283771cfb4",
                    "chunk-1a4f056d": "30fb56e680c9ef986090",
                    "chunk-1ad4b1ee": "4e869ec1690bc26de230",
                    "chunk-1e851f9b": "25b7f3ef1cf00293cd26",
                    "chunk-1f7f9f18": "4fe6a2af2b371e83d855",
                    "chunk-1fea3aa2": "7d04281f094e398acd07",
                    "chunk-205b3c0c": "d78b7a3c825a121e19cb",
                    "chunk-23d4be1a": "d2bb37d6a0ddf88e760d",
                    "chunk-2415628e": "e15c72f9abb1a622e7eb",
                    "chunk-2b9bd79e": "692a9a6eb95bd1433cf0",
                    "chunk-2d0b6e7a": "31d6cfe0d16ae931b73c",
                    "chunk-2d0b95da": "31d6cfe0d16ae931b73c",
                    "chunk-2d182ed7": "4d82d098a60c881888b0",
                    "chunk-2f2ca2ce": "7848e3ff059535afd132",
                    "chunk-31df845a": "2f494b9f23ad82d62438",
                    "chunk-32ff8ac2": "31d6cfe0d16ae931b73c",
                    "chunk-6b05f859": "2d80b92b4aca311f0c00",
                    "chunk-36210c95": "c94fef077c84b3011dcb",
                    "chunk-3a7e2760": "972a7018b5bf5cc8fac1",
                    "chunk-3b1ce5d8": "e054496671dacb54ff7b",
                    "chunk-3bce6238": "1e43b5e0ce4ef866a225",
                    "chunk-3d9d0e28": "254cecd8df6963d8f613",
                    "chunk-3ec117f6": "784b2ccbad50f5bfdf1e",
                    "chunk-43a507d9": "8447547feaa03a9dcabe",
                    "chunk-46c92a3d": "00960fcb3400426c3692",
                    "chunk-47957392": "5e962829d9f084278638",
                    "chunk-47a04560": "d0e9b225e8118467b826",
                    "chunk-4888bb2e": "fe7edf712b42b991e6b1",
                    "chunk-4a6d8cf0": "1c7ee7b0d536fb35b407",
                    "chunk-4ec92e32": "5d9532422bba6445ccbb",
                    "chunk-4fe55158": "c99feb3c41165393d33c",
                    "chunk-520a8c66": "31d6cfe0d16ae931b73c",
                    "chunk-5331590c": "15f8adcbf6c836c9ff96",
                    "chunk-57e6a106": "d4a622cbdb4dde6b3850",
                    "chunk-582f4b2a": "31d6cfe0d16ae931b73c",
                    "chunk-58f1df36": "d3c72c7e515dffcff956",
                    "chunk-5912e734": "abf2bf7032c7df09f8c9",
                    "chunk-59afd22a": "625bb6343a9f24ada172",
                    "chunk-59b7ffc8": "15aa238e3a0ca9ef887c",
                    "chunk-5c8a8beb": "729c4fe0dbf69972ecc3",
                    "chunk-5d2111d6": "038973df26532fefd7b6",
                    "chunk-621d2e04": "13298953cfface0ce5fe",
                    "chunk-6de5407c": "2f494b9f23ad82d62438",
                    "chunk-7273b22c": "a747186f3e6c02efaa0a",
                    "chunk-14c4ad9f": "83c1da4c1e09bbe55c7c",
                    "chunk-72e7daef": "c99feb3c41165393d33c",
                    "chunk-73d0c6bf": "9a7ec0a7b508e9a87d73",
                    "chunk-7575032e": "7fd4f241e57b9906038f",
                    "chunk-785926d5": "0f1bbb86c90077cd7fb8",
                    "chunk-795a3056": "4d4644f3f1bdfd0795c7",
                    "chunk-7ee05792": "00d2bbdc46000215bcc3",
                    "chunk-7f923980": "0cfc5717750b4453a8cc",
                    "chunk-82f932e8": "6d2699c162164bed65ee",
                    "chunk-85f1646a": "a6d0c4b4cb8b2349c749",
                    "chunk-86cd8e92": "6e27ec23c10e5f8d04b3",
                    "chunk-89ce40fe": "2db9a9b66cac79e002ba",
                    "chunk-9c8a29d2": "15aa238e3a0ca9ef887c",
                    "chunk-9cec785e": "dae1cf1de3e0a4606818",
                    "chunk-a36a538e": "c0c12a41766bb6870fe3",
                    "chunk-ac762624": "421514b671db98c8aa2f",
                    "chunk-b45af54e": "9e474f5e454b4497f7db",
                    "chunk-bed30930": "8d1e6224c3d6409ff6f6",
                    "chunk-cc8775f0": "90c7d8b3f55e44d8f234",
                    "chunk-cd91c9d4": "3f938dc0a4091de4f7a7",
                    "chunk-d101f7ee": "9b937a552edec94d235f",
                    "chunk-d2260cfa": "c03c70a2d523f7d19805",
                    "chunk-d89427e4": "0f7e3b3174280edf5ab2",
                    "chunk-dde75352": "0f1bbb86c90077cd7fb8",
                    "chunk-e9f20a10": "e38ca2cb4afcaf5580fd",
                    "chunk-06fc6ba5": "d7ec48187c5cc33105e4",
                    "chunk-388c8778": "161f06eba5d3d58b2076",
                    "chunk-483ecc60": "9cc811146b6a743e3e16",
                    "chunk-666c87a3": "e28b801e957bd28c16dc",
                    "chunk-f0adbe10": "31d6cfe0d16ae931b73c",
                    "chunk-052d0b21": "149109448602f456473f",
                    "chunk-06cfb6e6": "af12614d4dc5b354cec2",
                    "chunk-08d235f6": "a1c2ac4208ee9c2483ae",
                    "chunk-252e2bbc": "76bf726407b5ca12cd09",
                    "chunk-35ad88fb": "ea9baff1f05f47148c5c",
                    "chunk-43d43526": "bb21f86cfe8fdf5c0062",
                    "chunk-4565e728": "3d33a2178efeae561152",
                    "chunk-0a79695e": "82f81292b01967b77fcb",
                    "chunk-0ecf62f0": "6c8b3e4512b37ce776f9",
                    "chunk-2f1451e7": "3061ca570fa950036d9c",
                    "chunk-31cff43a": "6c8b3e4512b37ce776f9",
                    "chunk-377f3f1b": "e23fbc834e60a5192754",
                    "chunk-3eda52b8": "b82c364a7b5c040b91f9",
                    "chunk-5d1b7111": "de20a0e3507f1d64f437",
                    "chunk-5f55b6e0": "60729fea36b112059163",
                    "chunk-6696147b": "3142e6e50454fcc1a8b8",
                    "chunk-68a5d9e5": "adb5d48860033867162b",
                    "chunk-72a90a08": "6e59221ee7d9f2fa48c0",
                    "chunk-738f2e6a": "af203d65d71b01bc693e",
                    "chunk-81dc265e": "6c8b3e4512b37ce776f9",
                    "chunk-cd0796ca": "d8467bff99ac8484f54e",
                    "chunk-e2341a3c": "7a8a9d06d54b57b91d49",
                    "chunk-be6aa578": "0c02fd4eae3e30e06082",
                    "chunk-f47f9924": "2f6272edb91612abd953",
                    "chunk-f48fd4fa": "e864de3a8b0635c630b8",
                    "chunk-f532982c": "1974ee0f1e411acce4dd",
                    "chunk-6cb65fec": "57c726f6e6589f066217",
                    "chunk-aa35b9cc": "75d1a0948a7dc623c242",
                    "chunk-d33ff21e": "6b1d7b1e5760916ef09d",
                    "chunk-d6d048b4": "b030c719d73c55619ad2",
                    "chunk-daada084": "95b16d6b1b6b436b02d1"
                } [e] + ".css?v=1601431911661", c = r.p + n, o = document.getElementsByTagName("link"), s = 0; s < o.length; s++) {
                var u = o[s],
                    d = u.getAttribute("data-href") || u.getAttribute("href");
                if ("stylesheet" === u.rel && (d === n || d === c)) return t()
            }
            var l = document.getElementsByTagName("style");
            for (s = 0; s < l.length; s++) {
                u = l[s], d = u.getAttribute("data-href");
                if (d === n || d === c) return t()
            }
            var f = document.createElement("link");
            f.rel = "stylesheet", f.type = "text/css", f.onload = t, f.onerror = function (t) {
                var n = t && t.target && t.target.src || c,
                    o = new Error("Loading CSS chunk " + e + " failed.\n(" + n + ")");
                o.code = "CSS_CHUNK_LOAD_FAILED", o.request = n, delete i[e], f.parentNode.removeChild(f), a(o)
            }, f.href = c;
            var h = document.getElementsByTagName("head")[0];
            h.appendChild(f)
        })).then((function () {
            i[e] = 0
        })));
        var n = c[e];
        if (0 !== n)
            if (n) t.push(n[2]);
            else {
                var o = new Promise((function (t, a) {
                    n = c[e] = [t, a]
                }));
                t.push(n[2] = o);
                var u, d = document.createElement("script");
                d.charset = "utf-8", d.timeout = 120, r.nc && d.setAttribute("nonce", r.nc), d.src = s(e);
                var l = new Error;
                u = function (t) {
                    d.onerror = d.onload = null, clearTimeout(f);
                    var a = c[e];
                    if (0 !== a) {
                        if (a) {
                            var n = t && ("load" === t.type ? "missing" : t.type),
                                i = t && t.target && t.target.src;
                            l.message = "Loading chunk " + e + " failed.\n(" + n + ": " + i + ")", l.name = "ChunkLoadError", l.type = n, l.request = i, a[1](l)
                        }
                        c[e] = void 0
                    }
                };
                var f = setTimeout((function () {
                    u({
                        type: "timeout",
                        target: d
                    })
                }), 12e4);
                d.onerror = d.onload = u, document.head.appendChild(d)
            } return Promise.all(t)
    }, r.m = e, r.c = n, r.d = function (e, t, a) {
        r.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: a
        })
    }, r.r = function (e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, r.t = function (e, t) {
        if (1 & t && (e = r(e)), 8 & t) return e;
        if (4 & t && "object" === typeof e && e && e.__esModule) return e;
        var a = Object.create(null);
        if (r.r(a), Object.defineProperty(a, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var n in e) r.d(a, n, function (t) {
                return e[t]
            }.bind(null, n));
        return a
    }, r.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e["default"]
        } : function () {
            return e
        };
        return r.d(t, "a", t), t
    }, r.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, r.p = "/v2/", r.oe = function (e) {
        throw console.error(e), e
    };
    var u = window["webpackJsonp"] = window["webpackJsonp"] || [],
        d = u.push.bind(u);
    u.push = t, u = u.slice();
    for (var l = 0; l < u.length; l++) t(u[l]);
    var f = d;
    o.push([0, "chunk-vendors"]), a()
})({
    0: function (e, t, a) {
        e.exports = a("56d7")
    },
    "0d0f": function (e, t, a) {},
    "138e": function (e, t, a) {
        a("e35a"), a("5e9f"), e.exports = [{
            name: "登录",
            type: 1,
            pcPath: "/site/login",
            mobilePath: "/site/m_login"
        }, {
            name: "服务大厅",
            type: 1,
            pcPath: "/site/service",
            mobilePath: "/site/m_index"
        }, {
            name: "应用组",
            type: 1,
            pcPath: "/site/appGroup",
            mobilePath: "/site/m_appGroup"
        }, {
            name: "首页",
            type: 1,
            pcPath: "*",
            mobilePath: "/site/m_index"
        }, {
            name: "首页",
            type: 1,
            pcPath: "/site/index",
            mobilePath: "/site/m_index"
        }, {
            name: "个人信息",
            type: 1,
            pcPath: "/site/personal",
            mobilePath: "/site/m_personal"
        }, {
            name: "个人信息中心",
            type: 1,
            pcPath: "/site/upcPersonal",
            mobilePath: "/site/m_upcPersonal"
        }, {
            name: "个人中心",
            type: 2,
            pcPath: "/site/ucenter",
            mobilePath: "/site/m_message",
            changeFunc: function (e, t, a) {
                a.query.showroute && "infoCenter" != a.query.showroute || e.replace({
                    path: t,
                    query: a.query
                })
            }
        }, {
            name: "添加流程图",
            type: 1,
            pcPath: "/bpmn/addBpmn",
            mobilePath: "/from/m_addBpmn"
        }, {
            name: "编辑流程图",
            type: 2,
            pcPath: "/bpmn/editBpmn",
            mobilePath: "/bpmn/m_editBpmn",
            changeFunc: function (e, t, a) {
                "launch" == a.query.showRoute ? e.replace({
                    path: "/matter/index" == t ? "/matter/index" : "/matter/m_launch",
                    query: a.query
                }) : e.replace({
                    path: "/matter/index" == t ? "/matter/index" : "/matter/m_index",
                    query: a.query
                })
            }
        }, {
            name: "事项详情",
            type: 1,
            pcPath: "/matter/detail",
            mobilePath: "/matter/m_detail"
        }, {
            name: "事项发起",
            type: 1,
            pcPath: "/matter/start",
            mobilePath: "/matter/m_start"
        }, {
            name: "分步发起",
            type: 1,
            pcPath: "/matter/startStep",
            mobilePath: "/matter/m_startStep"
        }, {
            name: "驳回分步",
            type: 1,
            pcPath: "/matter/rejectStep",
            mobilePath: "/matter/m_rejectStep"
        }, {
            name: "事项审批",
            type: 1,
            pcPath: "/matter/examine",
            mobilePath: "/matter/m_examine"
        }, {
            name: "我的事项",
            type: 2,
            pcPath: "/matter/index",
            mobilePath: "/matter/m_launch",
            changeFunc: function (e, t, a) {
                "launch" == a.query.page ? e.replace({
                    path: "/matter/index" == t ? "/matter/index" : "/matter/m_launch",
                    query: a.query
                }) : e.replace({
                    path: "/matter/index" == t ? "/matter/index" : "/matter/m_index",
                    query: a.query
                })
            }
        }, {
            name: "我的事项",
            type: 2,
            pcPath: "/matter/index",
            mobilePath: "/matter/m_index",
            changeFunc: function (e, t, a) {
                "launch" == a.query.page ? e.replace({
                    path: "/matter/index" == t ? "/matter/index" : "/matter/m_launch",
                    query: a.query
                }) : e.replace({
                    path: "/matter/index" == t ? "/matter/index" : "/matter/m_index",
                    query: a.query
                })
            }
        }, {
            name: "数据中心",
            type: 1,
            pcPath: "/report/index",
            mobilePath: "/report/m_index"
        }, {
            name: "报表详情",
            type: 1,
            pcPath: "/report/detail",
            mobilePath: "/report/m_detail"
        }]
    },
    "1d8b": function (e, t, a) {
        "use strict";
        a("ecb4");
        var n = {
            getApi: function (e) {
                var t = appConfig.apis[e];
                return t ? t.indexOf("mock") < 0 ? appConfig.apiBaseUrl + t : t : ""
            }
        };
        t["a"] = n
    },
    "381c": function (e, t) {
        e.exports = {
            port: "8883",
            devApi: "test-workflow.campusapp.com.cn",
            onLineDomainName: "test.office.rlstech.cn",
            onlineDebug: !1,
            baseUrl: "",
            apiBaseUrl: "",
            staticUrl: "/static/",
            routeBasePath: "/v2/",
            uploadUrl: "https://dev-officeflowimg.rlstech.cn/",
            upImageUrl: "http://test.officeflowimg.rlstech.cn/",
            upFileUrl: "",
            uidKey: "vjuid",
            sourceV: (new Date).getTime(),
            apis: {
                frameToLogin: "/api/login/main",
                getSiteConfig: "/api/home/site-options",
                getAllAuth: "/site/user/auth",
                getUserName: "/site/user/get-name",
                uploadindex: "/api/upload/index"
            },
            pcMobileChange: [],
            customConfig: {
                isToInfoCenter: !0,
                isToPdf: {
                    default: 1
                },
                ucenterPath: {
                    default: "site/personal"
                },
                toPdfHttp: "https://",
                oldPrintPage: {
                    margin: "20px"
                },
                newPrintPage: {
                    margin: "0"
                },
                formLandscape: {}
            }
        }
    },
    4274: function (e, t, a) {},
    5557: function (e, t, a) {
        "use strict";
        var n = function (e) {
            this.config = {
                DbName: "BrowerDb",
                expires: 0
            }, this.initDb(e)
        };
        n.prototype.initDb = function (e) {
            for (var t in e) this.config[t] = void 0 !== this.config[t] ? e[t] : this.config[t];
            this.config.DbTime = this.config.DbName + "_time"
        }, n.prototype.getKey = function (e) {
            return this.config.DbName + "_" + e
        }, n.prototype.setLItem = function (e, t, a) {
            if (this.clearOverData(), a = void 0 === a ? this.config.expires : a, this.removeLItem(e), a) {
                var n = null != localStorage.getItem(this.config.DbName) ? JSON.parse(localStorage.getItem(this.config.DbName)) : {},
                    i = null != localStorage.getItem(this.config.DbTime) ? JSON.parse(localStorage.getItem(this.config.DbTime)) : {};
                n[e] = t, i[e] = this.getSelfTime(a), localStorage.setItem(this.config.DbName, JSON.stringify(n)), localStorage.setItem(this.config.DbTime, JSON.stringify(i))
            } else localStorage.setItem(this.getKey(e), JSON.stringify(t))
        }, n.prototype.getLItem = function (e) {
            this.clearOverData();
            var t = null != localStorage.getItem(this.config.DbName) ? JSON.parse(localStorage.getItem(this.config.DbName)) : {},
                a = JSON.parse(localStorage.getItem(this.getKey(e)));
            return null !== a ? a : void 0 !== t[e] ? t[e] : null
        }, n.prototype.removeLItem = function (e) {
            this.clearOverData();
            var t = null != localStorage.getItem(this.config.DbName) ? JSON.parse(localStorage.getItem(this.config.DbName)) : {},
                a = null != localStorage.getItem(this.config.DbTime) ? JSON.parse(localStorage.getItem(this.config.DbTime)) : {},
                n = {},
                i = {};
            if (void 0 !== t[e]) {
                for (var c in t) e !== c && (n[c] = t[c], i[c] = a[c]);
                localStorage.setItem(this.config.DbName, JSON.stringify(n)), localStorage.setItem(this.config.DbTime, JSON.stringify(i))
            }
            localStorage.removeItem(this.getKey(e))
        }, n.prototype.clearLAll = function () {
            localStorage.removeItem(this.config.DbName), localStorage.removeItem(this.config.DbTime)
        }, n.prototype.clearOverData = function () {
            var e = null != localStorage.getItem(this.config.DbName) ? JSON.parse(localStorage.getItem(this.config.DbName)) : {},
                t = null != localStorage.getItem(this.config.DbTime) ? JSON.parse(localStorage.getItem(this.config.DbTime)) : {},
                a = this.getSelfTime(0),
                n = {},
                i = {};
            for (var c in t) t[c] > a && void 0 !== e[c] && (n[c] = e[c], i[c] = t[c]);
            localStorage.setItem(this.config.DbName, JSON.stringify(n)), localStorage.setItem(this.config.DbTime, JSON.stringify(i))
        }, n.prototype.getSelfTime = function (e) {
            var t = new Date;
            return t.setTime(t.getTime() + parseInt(e)), t.getTime()
        }, n.prototype.setSItem = function (e, t) {
            sessionStorage.setItem(this.getKey(e), JSON.stringify(t))
        }, n.prototype.getSItem = function (e) {
            return JSON.parse(sessionStorage.getItem(this.getKey(e)))
        }, n.prototype.removeSItem = function (e) {
            sessionStorage.removeItem(this.getKey(e))
        }, t["a"] = new n({
            DbName: "officeDb",
            expires: 0
        })
    },
    "56d7": function (e, t, a) {
        "use strict";
        a.r(t);
        a("a133"), a("ed0d"), a("f09c"), a("e117");
        var n = a("c0a4"),
            i = (a("ecb4"), a("77ad"), a("e793")),
            c = a("381c"),
            o = a("138e"),
            s = a("a4d9"),
            r = a("e425");
        if (c.port = location.port, c.domainName = location.hostname, c.baseUrl = location.protocol + "//" + location.hostname + (location.port ? ":" + location.port : "") + c.routeBasePath, -1 !== location.href.indexOf("local.")) c.apiBaseUrl = "https://" + c.devApi;
        else {
            var u = c.onlineDebug && "test." == location.hostname.substr(0, 5) ? location.hostname.slice(5) : location.hostname,
                d = c.onlineDebug ? "https:" : location.protocol;
            c.apiBaseUrl = d + "//" + u + ("80" == location.port || "8883" == location.port ? "" : ":" + location.port)
        }
        c.upFileUrl = c.apiBaseUrl + "/site/attach?file=all/", c.uploadUrl = c.apiBaseUrl, c.staticUrl = c.baseUrl + "static/", c.apis = Object(i["a"])(Object(i["a"])({}, c.apis), r), c.pcMobileChange = o, s.customConfig = Object(i["a"])(Object(i["a"])({}, c.customConfig), s.customConfig), c = Object(i["a"])(Object(i["a"])({}, c), s), window.appConfig = c, n["default"].prototype.appConfig = c;
        var l = a("a336"),
            f = a.n(l),
            h = (a("26fe"), a("2984"), a("7c18")),
            p = a.n(h),
            m = (a("6eb9"), a("6389")),
            b = a.n(m),
            g = (a("569c"), a("43ae")),
            k = a.n(g),
            y = (a("294b"), a("a252")),
            v = a.n(y),
            L = (a("5806"), a("39ea")),
            S = a.n(L),
            w = (a("7b77"), a("3450")),
            j = a.n(w),
            I = (a("c973"), a("7af9")),
            C = a.n(I),
            P = (a("9907"), a("8d78")),
            T = a.n(P),
            N = (a("567e"), a("2b3e")),
            _ = a.n(N),
            x = (a("cc43"), a("855f")),
            D = a.n(x),
            A = (a("93fd"), a("60cf")),
            O = a.n(A),
            E = (a("e044"), a("dd58")),
            M = a.n(E),
            R = (a("4f55"), a("c944")),
            U = a.n(R),
            B = (a("d06c"), a("7763")),
            F = a.n(B),
            H = (a("6d09"), a("ee61")),
            K = a.n(H),
            q = (a("423c"), a("848f")),
            W = a.n(q),
            J = (a("b11c"), a("fce0")),
            G = a.n(J),
            z = (a("584b"), a("16a9")),
            V = a.n(z),
            Y = (a("2182"), a("d906")),
            X = a.n(Y),
            Q = (a("b806"), a("7810")),
            Z = a.n(Q),
            ee = (a("ca6c"), a("2c83")),
            te = a.n(ee),
            ae = (a("31d0"), a("60bf")),
            ne = a.n(ae),
            ie = (a("32de"), a("8d99")),
            ce = a.n(ie),
            oe = (a("a68a"), a("230e")),
            se = a.n(oe),
            re = (a("9102"), a("3aa8")),
            ue = a.n(re),
            de = (a("086f"), a("ce6c")),
            le = a.n(de),
            fe = (a("3c5e"), a("3a6a")),
            he = a.n(fe),
            pe = (a("0e55"), a("7682")),
            me = a.n(pe),
            be = (a("357c"), a("32a0")),
            ge = a.n(be),
            ke = (a("008a"), a("020f")),
            ye = a.n(ke),
            ve = (a("f923"), a("7794")),
            Le = a.n(ve),
            Se = (a("4c51"), a("e403")),
            we = a.n(Se),
            je = (a("cb5a"), a("cbc6")),
            Ie = a.n(je),
            Ce = (a("e8bd"), a("3f00")),
            Pe = a.n(Ce),
            Te = (a("dc0a"), a("679e")),
            Ne = a.n(Te),
            _e = (a("4644"), a("7668")),
            xe = a.n(_e),
            De = (a("b764"), a("77bb")),
            Ae = a.n(De),
            Oe = (a("5bfb"), a("8fbc")),
            Ee = a.n(Oe),
            Me = (a("868f"), a("379c")),
            Re = a.n(Me),
            Ue = (a("e6e5"), a("2f19")),
            Be = a.n(Ue),
            Fe = (a("87cf"), a("b94c")),
            He = a.n(Fe),
            Ke = (a("9aa1"), a("a8e4")),
            $e = a.n(Ke),
            qe = (a("ca55"), a("3fbd")),
            We = a.n(qe),
            Je = (a("608b"), a("d55c")),
            Ge = a.n(Je);
        n["default"].use(Ge.a), n["default"].use(We.a), n["default"].use($e.a), n["default"].use(He.a), n["default"].use(Be.a), n["default"].use(Re.a), n["default"].use(Ee.a), n["default"].use(Ae.a), n["default"].use(xe.a), n["default"].use(Ne.a), n["default"].use(Pe.a), n["default"].use(Ie.a), n["default"].use(we.a), n["default"].use(Le.a), n["default"].use(ye.a), n["default"].use(ge.a), n["default"].use(me.a), n["default"].use(he.a), n["default"].use(le.a), n["default"].use(ue.a), n["default"].use(se.a), n["default"].use(ce.a), n["default"].use(ne.a), n["default"].use(te.a), n["default"].use(Z.a), n["default"].use(X.a), n["default"].use(V.a), n["default"].use(G.a), n["default"].use(W.a), n["default"].use(K.a), n["default"].use(F.a), n["default"].use(U.a), n["default"].use(M.a), n["default"].use(O.a), n["default"].use(D.a), n["default"].use(_.a), n["default"].use(T.a), n["default"].use(C.a), n["default"].use(j.a), n["default"].use(S.a), n["default"].use(v.a), n["default"].use(k.a), n["default"].prototype.$MessageBox = b.a, n["default"].prototype.$message = p.a;
        var ze = a("e589"),
            Ve = a("255a"),
            Ye = a.n(Ve),
            Xe = a("4a42"),
            Qe = a.n(Xe),
            Ze = a("1ab3"),
            et = a.n(Ze),
            tt = {
                thirdpartyApplyBtn: "立即申请",
                serviceDepart: "服务部门",
                serviceOpenTiem: "起止时间",
                openingHoursText: "长期",
                taskSubmitBtn: "正式提交",
                xmlTab: "流程图",
                wxHotTit: "热门服务",
                rejectTips: "请立刻修改，重新提交",
                navPersonalEntry: "个人中心",
                mySubmit: "我的发起",
                myTask: "我的任务",
                noSubmit: "暂无数据",
                noTask: "暂无数据",
                noOversee: "暂无数据",
                noRead: "暂无数据",
                matterLog: "操作意见",
                thirdpartyBtnText: "查看表单",
                reportEmailExportText: "请输入邮箱地址",
                rejectText: "驳回",
                className: "服务分类",
                numberText: "学工号",
                infoQuery: "信息查询",
                nextNodeTitleText: "请设置下一个节点审批人或短信发送",
                m_startForm: "申请表单",
                loginSignUpText: "校外用户注册",
                loginpwdResetText: "校外用户忘记密码",
                loginSignUpPopText: "校外用户注册账户",
                sitePwdResetText: "校外用户密码找回"
            },
            at = {
                message: "消息"
            };
        n["default"].use(ze["a"]);
        var nt = {
                en: Object(i["a"])(Object(i["a"])({}, Ye.a), {}, {
                    system: Object(i["a"])(Object(i["a"])({}, tt), at)
                }),
                zh: Object(i["a"])(Object(i["a"])({}, Qe.a), {}, {
                    system: Object(i["a"])(Object(i["a"])({}, tt), at)
                })
            },
            it = new ze["a"]({
                locale: "zh",
                messages: nt
            });
        et.a.i18n((function (e, t) {
            return it.t(e, t)
        }));
        var ct = it,
            ot = (a("4274"), a("62cb")),
            st = (a("6128"), a("e8d2")),
            rt = {
                pieceConfig: {
                    webIndexLink: {
                        default: "/site/index",
                        xidian: "/site/outlink?outlink=" + encodeURIComponent("http://ehall.xidian.edu.cn/new/index_xd.html#/home")
                    },
                    webServiceLink: {
                        default: "/site/service",
                        xidian: "/site/outlink?outlink=" + encodeURIComponent("http://ehall.xidian.edu.cn/new/index_xd.html#/search")
                    },
                    ncepuPersonalTit: {
                        path: "/site/personal",
                        ncepu: "教师综合信息查询系统"
                    },
                    addSreviceShow: {
                        default: !0,
                        xidian: !1,
                        cufe: !1,
                        pku: !1
                    },
                    moveTips: {
                        default: !1,
                        cufe: !0
                    },
                    formitem: {
                        default: {
                            type: !0,
                            id: []
                        },
                        ncepu: {
                            type: !1,
                            id: ["83", "97"]
                        }
                    },
                    showToPersonal: {
                        default: !0,
                        xidian: !1,
                        nwu: !1,
                        buaa: !1,
                        pku: !1,
                        uestc: !1,
                        bnu: !1
                    },
                    setDate: {
                        default: !1,
                        cufe: !0,
                        pku: !0
                    },
                    oucHide: {
                        default: !0,
                        ouc: !1
                    },
                    mobilePersonal: {
                        default: !0,
                        xidian: !1,
                        fudan: !1,
                        bjtu: !1
                    },
                    hideHeader: {
                        default: !1,
                        bjut: !0
                    },
                    redTag: {
                        default: [],
                        upc: []
                    },
                    documentTitle: {
                        default: "",
                        buaa: "网上办事大厅"
                    },
                    messageCtrl: {
                        default: "信息查询",
                        upc: "信息管理"
                    },
                    upcTiaoUrl: {
                        default: !0,
                        upc: !1
                    },
                    isToInfoCenter: {
                        default: !0,
                        buaa: !1,
                        nwu: !1,
                        pku: !1
                    },
                    showHandleNum: {
                        default: !0,
                        buaa: !1
                    },
                    leftModelSort: {
                        default: [1, 2, 3],
                        buaa: [3, 2, 1]
                    },
                    rightModelSort: {
                        default: [4, 5, 6],
                        buaa: [6, 5, 4],
                        ppsuc: [6, 5, 4]
                    },
                    forgetPwd: {
                        default: !1,
                        nwu: "http://app.nwu.edu.cn/form/wap/default?formid=11"
                    },
                    showHelper: {
                        default: !1,
                        upc: !0
                    },
                    isCcom: {
                        default: !1,
                        ccom: !0
                    },
                    upcHide: {
                        default: [],
                        upc: [392, 393, 394, 397, 398, 333]
                    },
                    showSignAndAuth: {
                        default: !0
                    },
                    showEntrust: {
                        default: !1,
                        dev: !0,
                        pku: !0,
                        test: !0
                    },
                    rejectOrReturn: {
                        default: !1,
                        pku: !0
                    },
                    webText: {
                        default: {
                            taskSubmitBtn: "正式提交",
                            xmlTab: "流程图",
                            wxHotTit: "热门服务",
                            rejectTips: "请立刻修改，重新提交",
                            navPersonalEntry: "个人中心",
                            mySubmit: "我的发起",
                            myTask: "我的任务",
                            noSubmit: "暂无数据",
                            noTask: "暂无数据",
                            noOversee: "暂无数据",
                            noRead: "暂无数据",
                            serviceDepart: "服务部门",
                            serviceOpenTiem: "起止时间",
                            matterLog: "操作意见",
                            thirdpartyBtnText: "查看表单",
                            thirdpartyApplyBtn: "立即申请"
                        },
                        pku: {
                            taskSubmitBtn: "提交审批",
                            xmlTab: "办事流程",
                            rejectTips: "可修改后重新提交",
                            mySubmit: "我的申请",
                            myTask: "待办事项",
                            noSubmit: "您还未提交过申请",
                            noTask: "暂无待办事项",
                            noOversee: "暂无督办的事项",
                            noRead: "暂无知会的事项"
                        },
                        ppsuc: {
                            wxHotTit: "一张表建设专栏"
                        },
                        buaa: {
                            thirdpartyBtnText: "详细信息"
                        },
                        ncepu: {
                            serviceDepart: "业务归属部门",
                            serviceOpenTiem: "事项开放时间"
                        },
                        fudan: {
                            matterLog: "操作",
                            thirdpartyApplyBtn: "进入服务"
                        },
                        upc: {
                            xmlTab: "办理流程"
                        }
                    },
                    noDataSet: {
                        default: !1,
                        pku: !0
                    },
                    matterCustom: {
                        default: {
                            264: !0
                        },
                        cufe: {
                            341: !0
                        }
                    },
                    isToPdf: {
                        default: {
                            default: 1
                        },
                        test: {
                            default: 2
                        },
                        cufe: {
                            default: 2
                        },
                        pku: {
                            default: 3
                        },
                        nwu: {
                            default: 3
                        },
                        bupt: {
                            default: 2
                        },
                        upc: {
                            default: 1,
                            201: 2,
                            183: 4,
                            316: 4,
                            315: 2
                        },
                        ucas: {
                            default: 2
                        },
                        bjut: {
                            default: 2
                        },
                        cup: {
                            default: 2
                        },
                        zhongxi: {
                            default: 2
                        },
                        ppsuc: {
                            default: 2
                        }
                    },
                    isQuickDownload: {
                        default: {
                            default: !1
                        },
                        test: {
                            default: !1,
                            1377: !0
                        }
                    },
                    isShowPrint: {
                        default: {
                            default: !0
                        },
                        upc: {
                            default: !0
                        },
                        test: {
                            default: !0
                        }
                    },
                    showPrinter: {
                        default: !1,
                        buaa: !0,
                        test: !0,
                        dev: !0
                    },
                    ispku: {
                        default: !1,
                        pku: !0,
                        test: !1,
                        dev: !1
                    },
                    hasSms: {
                        default: !0
                    },
                    startExemCLosePage: {
                        default: !1,
                        xidian: !0
                    },
                    formLandscape: {
                        default: {},
                        cufe: {
                            1106: "vertical",
                            1361: "vertical"
                        }
                    },
                    showStatistics: {
                        default: !1,
                        dev: !0,
                        test: !0,
                        cufe: !0
                    },
                    toOneTablePass: {
                        default: "/site/personal",
                        bupt: "http://me.bupt.edu.cn/page/backHome/index",
                        ncepu: "http://me.ncepu.edu.cn/page/backHome/index",
                        cup: "http://me.cup.edu.cn/page/backHome/index",
                        ucas: "http://sep.ucas.ac.cn/portal/site/419/from/aHR0cHM6Ly9tZS51Y2FzLmFjLmNuL3BhZ2UvYmFja0hvbWUvaW5kZXg=",
                        bift: "http://me.bift.edu.cn/page/backHome/index"
                    },
                    isBupt: {
                        default: !1,
                        bupt: !0
                    },
                    isNcepu: {
                        default: !1,
                        ncepu: !0
                    },
                    isFudan: {
                        default: !1,
                        fudan: !0
                    },
                    hideBreadcrumb: {
                        default: !1,
                        fudan: !0
                    },
                    pkuSuggestion: {
                        default: [],
                        pku: [352]
                    },
                    oucHideBtn: {
                        default: !0,
                        ouc: !1
                    },
                    hideLoadSelect: {
                        default: [],
                        pku: [348, 349, 350, 351, 352],
                        ouc: [337, 347, 339, 343, 344]
                    },
                    hideMobileBtn: {
                        default: [],
                        ouc: [337, 347],
                        bjut: [333, 336, 337, 338]
                    },
                    showLoadDrafSelect: {
                        default: [],
                        bjut: [333, 336, 337, 338]
                    },
                    hideTransient: {
                        default: [],
                        pku: [348, 349, 350, 351, 352]
                    },
                    leaveCountryId: {
                        default: [],
                        pku: [370, 372]
                    },
                    awayFixed: {
                        default: [],
                        pku: [348, 349, 350, 351, 352]
                    },
                    hideBtns: {
                        default: {
                            app_id: []
                        },
                        pku: {
                            app_id: [352]
                        }
                    },
                    pkuDaichuli: {
                        default: [],
                        pku: [364, 383]
                    },
                    oldPrintPage: {
                        default: {
                            margin: "20px"
                        },
                        upc: {
                            margin: "15mm 10mm"
                        },
                        bupt: {
                            margin: "30mm 20mm 20mm 20mm"
                        }
                    },
                    newPrintPage: {
                        default: {
                            margin: "0"
                        },
                        upc: {
                            margin: "15mm 10mm"
                        },
                        bupt: {
                            margin: "30mm 20mm 20mm 20mm"
                        }
                    },
                    showLookForm: {
                        default: !1,
                        tsinghua: !0,
                        test: !0
                    },
                    forbiddenAutoSave: {
                        default: !1,
                        ncepu: [67]
                    },
                    isnacta: {
                        default: !1,
                        nacta: !0
                    },
                    hideBpmnTab: {
                        default: [],
                        upc: ["334", "335", "336", "337", "338", "339", "340", "341", "342", "343", "344", "345", "346", "347", "348"]
                    },
                    toPdfhttp: {
                        default: !1,
                        ucas: !0,
                        nwu: !0,
                        bjut: !0,
                        cup: !0
                    },
                    className: {
                        default: "服务分类",
                        ucas: "归属部门"
                    },
                    statement: {
                        default: "请输入邮箱地址",
                        ouc: "请输入邮箱地址(仅可导出到校内邮箱)"
                    },
                    requiredType: {
                        default: 0,
                        upc: 1
                    },
                    threeReportHeaber: {
                        default: {
                            54: "测试2"
                        },
                        uir: {
                            5: "Calendar_42",
                            4: "Calendar_42",
                            3: "Calendar_42",
                            2: "Calendar_42"
                        }
                    },
                    serviceDetailtext: {
                        default: "不可重复申请",
                        buaa: {
                            948: "该事项只能发起一次。The application can only be submitted once. Your have already submitted.",
                            946: "该事项只能发起一次。The application can only be submitted once. Your have already submitted."
                        }
                    },
                    countersigntext: {
                        default: {
                            default: {
                                btnText: "加签",
                                already: "已加签",
                                people: "加签人员",
                                successAlert: "成功加签",
                                tagText: "的加签",
                                examineAlert: "加签完成",
                                receiptText: "加签回执",
                                finishText: "已加签"
                            }
                        },
                        ppsuc: {
                            default: {
                                btnText: "加签",
                                already: "已加签",
                                people: "加签人员",
                                successAlert: "成功加签",
                                tagText: "的加签",
                                examineAlert: "加签完成",
                                receiptText: "加签回执",
                                finishText: "已加签"
                            },
                            392: {
                                btnText: "转经办人",
                                already: "已转经办人",
                                people: "转经办人员",
                                successAlert: "转经办人成功",
                                tagText: "的转经办人",
                                examineAlert: "转经办人办理完成",
                                receiptText: "转经办人回执",
                                finishText: "已转经办人"
                            }
                        }
                    },
                    isUestc: {
                        default: !1,
                        uestc: !0
                    },
                    pcServiceHide: {
                        default: [],
                        ccom: [413]
                    },
                    dInputLinkText: {
                        default: !1,
                        cufe: !0,
                        fudan: !0
                    }
                },
                getConfigLevel: function (e, t) {
                    return void 0 !== !this.pieceConfig[e] && (this.pieceConfig[e] && void 0 !== this.pieceConfig[e][st["a"].getWebId()] ? void 0 !== this.pieceConfig[e][st["a"].getWebId()][t] ? this.pieceConfig[e][st["a"].getWebId()][t] : this.pieceConfig[e][st["a"].getWebId()]["default"] : this.pieceConfig[e]["default"]["default"])
                },
                getConfig: function (e) {
                    return void 0 !== !this.pieceConfig[e] && (void 0 !== this.pieceConfig[e][st["a"].getWebId()] ? this.pieceConfig[e][st["a"].getWebId()] : this.pieceConfig[e]["default"])
                },
                setTitle: function (e, t) {
                    if (void 0 === !this.pieceConfig[e]) return !1;
                    void 0 != this.pieceConfig[e][st["a"].getWebId()] && this.pieceConfig[e]["path"] == t && (document.title = this.pieceConfig[e][st["a"].getWebId()])
                },
                getformitem: function (e, t) {
                    if (void 0 === !this.pieceConfig[e]) return !0;
                    if ("" == t) return !0;
                    var a = st["a"].getWebId(),
                        n = "";
                    return n = void 0 != this.pieceConfig[e][a] && void 0 != this.pieceConfig[e][a].id && "" != this.pieceConfig[e][a].id && -1 != this.pieceConfig[e][a].id.indexOf(t) ? this.pieceConfig[e][a].type : this.pieceConfig[e]["default"].type, n
                },
                getTextConfig: function (e, t, a) {
                    if (void 0 === !this.pieceConfig[e]) return !1;
                    var n = st["a"].getWebId(),
                        i = "";
                    return i = void 0 != this.pieceConfig[e][n] && void 0 != this.pieceConfig[e][n][t] ? this.pieceConfig[e][n][t] : this.pieceConfig[e]["default"][t], i
                },
                getDetailtest: function (e, t) {
                    if (void 0 === !this.pieceConfig[e]) return !1;
                    var a = st["a"].getWebId(),
                        n = "";
                    return n = void 0 != this.pieceConfig[e][a] && void 0 != this.pieceConfig[e][a][t] ? this.pieceConfig[e][a][t] : this.pieceConfig[e]["default"], n
                }
            };
        n["default"].prototype.pieceHelper = rt;
        a("9403");

        function ut(e) {
            var t = e.type,
                a = e.time,
                n = e.dataKey,
                i = e.newData;
            this.$getLastTime = this.$getLastTime ? this.$getLastTime : {}, this.$getLastTime[t] = void 0 != this.$getLastTime[t] ? this.$getLastTime[t] : 0, a > this.$getLastTime[t] && (this.$getLastTime[t] = a, this[n] = i)
        }
        n["default"].prototype.$dataHelper || (n["default"].prototype.$dataHelper = ut);
        a("fe59"), a("e35a"), a("5e9f"), a("08ba"), a("b4fb"), a("4194"), a("0d7a");
        var dt = a("5748"),
            lt = a("fe4f"),
            ft = a("897d"),
            ht = a.n(ft);
        a("6266");
        n["default"].use(lt["a"]);
        var pt = n["default"].prototype.appConfig,
            mt = function (e) {
                this.Router = null, this.template = e.template ? e.template : null, this.cssInfo = e.cssInfo ? e.cssInfo : null, this.publicCss = e.publicCss ? e.publicCss : [], this.styleCss = e.styleCss ? e.styleCss : {}, this.publicJs = e.publicJs ? e.publicJs : [], this.needLogins = e.needLogins ? e.needLogins : [], this.notneedLogins = e.notneedLogins ? e.notneedLogins : [], this.scrollConfig = e.scrollConfig ? e.scrollConfig : null, this.ctype = ""
            };
        mt.prototype.checkConfig = function () {
            return !(!this.template || !this.checkTemplate()) || (console.error("template 模板配置错误！"), !1)
        }, mt.prototype.checkTemplate = function () {
            var e = 0;
            for (var t in this.template) {
                var a = this.template[t];
                for (var n in a) {
                    var i = a[n];
                    if (!i.comLoad || "function" != typeof i.comLoad) return console.error(t + "模块， " + n + "页面，comLoad函数设置错误！"), !1;
                    if (!i.metaInfo || !i.metaInfo.title) return console.error(t + "模块， " + n + "页面，metainfo设置错误！"), !1;
                    e++
                }
            }
            return !!e || (console.error("最少应该有一个页面！"), !1)
        }, mt.prototype.getBaseRouter = function (e) {
            if (this.Router) return this.Router;
            this.Router = new lt["a"]({
                mode: "history",
                routes: e,
                base: pt.routeBasePath,
                scrollBehavior: function (e, t, a) {
                    return {
                        x: 0,
                        y: 0
                    }
                }
            });
            var t = this;
            return this.Router.afterEach((function (e) {
                t.progressEnd(), pt.onlyClient() && t.checkClientSize(e)
            })), this.loadMetaInfo(this.Router), this.loadOtherSource(this.Router), this.Router
        }, mt.prototype.checkClientSize = function (e) {
            var t = e.matched && e.matched.length && e.matched[0],
                a = -1 !== t.path.indexOf("m_");

            function n() {
                var e = document.documentElement.clientWidth,
                    t = 320,
                    n = 640,
                    i = 760;
                a ? (e < t || e > n) && !0 : e < i && !0, $("#check_client_size").remove()
            }
            n(), window.addEventListener("resize", n, !1)
        }, mt.prototype.loadRouter = function () {
            if (!this.checkConfig()) return !1;
            var e = [],
                t = this.template,
                a = null;
            for (var n in t) {
                var c = t[n];
                for (var o in c) {
                    var s = {
                        name: o,
                        path: "/" + n + "/" + o,
                        component: c[o]["comLoad"],
                        meta: c[o]["metaInfo"]
                    };
                    e.push(s)
                }
            }
            return a = Object(i["a"])(Object(i["a"])({}, {}), e[0]), a.path = "*", e.push(a), this.getBaseRouter(e)
        }, mt.prototype.getRequire = function (e) {
            return function (t, a) {
                return e("./" + t, a)
            }
        }, mt.prototype.loadMetaInfo = function (e) {
            var t = this;
            e.beforeEach((function (e, a, n) {
                t.progressStart(), e.meta.title && commonHelper.getDocumentTitle(e.meta.title, e.path), e.meta.desc && (document.desc = e.meta.desc), n()
            }))
        }, mt.prototype.sourceArrs = {}, mt.prototype.loadAllNum = 0, mt.prototype.sourceCallBack = null, mt.prototype.loadOtherSource = function (e) {
            var t = this;
            e.beforeEach((function (a, n, i) {
                t.clearSource();
                var c = "*" == a.matched[0].path ? e.options.routes[0].path : a.path;
                if (c = c.split("/"), c = [c[1], c[2]], !t.template[c[0]] || !t.template[c[0]][c[1]]) return i(), !1;
                var o = t.publicCss ? t.publicCss : [],
                    s = t.publicJs ? t.publicJs : [],
                    r = t.template[c[0]][c[1]].css ? t.template[c[0]][c[1]].css : [],
                    u = t.template[c[0]][c[1]].js ? t.template[c[0]][c[1]].js : [],
                    d = {
                        css: [].concat(Object(dt["a"])(o), Object(dt["a"])(t.getStyleCss(a.path)), Object(dt["a"])(r)),
                        js: [].concat(Object(dt["a"])(s), Object(dt["a"])(u))
                    };
                d.css.length || d.js.length ? (t.sourceArrs = d, t.registerSource(a, i)) : i()
            }))
        }, mt.prototype.getStyleCss = function (e) {
            var t = this.styleCss;
            if (!t.path || !t.baseName.length) return [];
            var a = [],
                n = commonHelper.getClientType(e) ? "m." : "",
                i = commonHelper.getClientType(e) ? "mstyle" : "style";
            return t.baseName.forEach((function (e) {
                a.push(t.path + n + commonHelper.getWebStyle(i) + "." + e)
            })), a
        }, mt.prototype.getClientClass = function (e) {
            return commonHelper.getClientType(e) ? "mobile" : "pc"
        }, mt.prototype.registerSource = function (e, t) {
            this.sourceCallBack = t;
            var a = this.getClientClass(e.path);
            this.ctype = a, this.loadCssSource(a), this.loadJsSource(a)
        }, mt.prototype.clearSource = function () {
            this.sourceArrs = [], this.loadAllNum = 0, this.sourceCallBack = null
        }, mt.prototype.loadCssSource = function (e) {
            var t = this;
            this.sourceArrs.css.forEach((function (a) {
                var n = pt.staticUrl + a,
                    i = ht()(n);
                if (t.loadAllNum++, $('[data-id="' + i + '"]').length) setTimeout((function () {
                    t.loadSourceSuccess(e)
                }), 200);
                else {
                    var c = '<link data-id="' + i + '" data-type="' + e + '" href="' + n + "?v=" + pt.sourceV + '" rel="stylesheet" type="text/css"/>';
                    $("head").append(c), console.log($('[data-id="' + i + '"]'), e), $('[data-id="' + i + '"]').on("load", (function () {
                        t.loadSourceSuccess(e)
                    }))
                }
            }))
        }, mt.prototype.loadJsSource = function (e) {
            var t = this;
            this.sourceArrs.js.forEach((function (a) {
                var n = pt.staticUrl + a,
                    i = ht()(n);
                if (t.loadAllNum++, $('[data-id="' + i + '"]').length) setTimeout((function () {
                    t.loadSourceSuccess(e)
                }), 200);
                else {
                    var c = document.createElement("script");
                    c.src = n + "?v=" + pt.sourceV, c.setAttribute("data-id", i), c.setAttribute("data-type", e), c.type = "text/javascript", c.async = !1, c.setAttribute("data-path", a), c.onload = function () {
                        t.loadSourceSuccess(e)
                    }, document.getElementsByTagName("body")[0].appendChild(c)
                }
            }))
        }, mt.prototype.loadSourceSuccess = function (e) {
            this.loadAllNum--, this.loadAllNum || this.sourceCallBack()
        }, mt.prototype.beforeEnterModule = function (e) {}, mt.prototype.progressSelector = "progress_loading", mt.prototype.progressStart = function () {
            if (!$("#" + this.progressSelector).length) {
                var e = '<div id="' + this.progressSelector + '"><div></div></div>';
                $("body").append(e)
            }
            this.clearProgress(), window.location.hash && -1 !== window.location.hash.indexOf("module_") || $("#" + this.progressSelector).show(), this.progressNum = 0, this.progressChange(98, 3e3)
        }, mt.prototype.progressEnd = function () {
            $(".frame-loader").length && $(".frame-loader").remove(), this.progressChange(100, 300)
        }, mt.prototype.progressClearBar = null, mt.prototype.progressNum = 0, mt.prototype.progressChange = function (e, t) {
            var a = 20,
                n = (e - this.progressNum) / (t / a),
                i = this;
            clearInterval(i.progressClearBar), i.progressClearBar = setInterval((function () {
                if ($("#" + i.progressSelector).find("div").width(i.progressNum + "%"), i.progressNum >= e) return clearInterval(i.progressClearBar), i.progressNum >= 100 && ($("#" + i.progressSelector).hide(), i.clearProgress()), !1;
                i.progressNum += n
            }), a)
        }, mt.prototype.clearProgress = function () {
            $("#" + this.progressSelector).find("div").width("0%")
        };
        var bt = mt,
            gt = a("e644"),
            kt = a("6367"),
            yt = {
                template: {
                    site: {
                        index: {
                            comLoad: function (e) {
                                Promise.all([a.e("chunk-93d6ec30"), a.e("chunk-52646bf4"), a.e("chunk-59afd22a")]).then(function () {
                                    var t = [a("0de5")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: {
                                title: "首页",
                                notNeedLogin: !1,
                                auth: ""
                            },
                            css: [],
                            js: []
                        },
                        login: {
                            comLoad: function (e) {
                                a.e("chunk-aa35b9cc").then(function () {
                                    var t = [a("9343")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: {
                                title: "登录",
                                notNeedLogin: !0,
                                auth: ""
                            },
                            css: [],
                            js: []
                        },
                        m_login: {
                            comLoad: function (e) {
                                a.e("chunk-419ae960").then(function () {
                                    var t = [a("57ec")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: {
                                title: "登录",
                                notNeedLogin: !0,
                                auth: ""
                            },
                            css: [],
                            js: []
                        },
                        m_signUp: {
                            comLoad: function (e) {
                                a.e("chunk-daada084").then(function () {
                                    var t = [a("19d7")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: {
                                title: "注册",
                                notNeedLogin: !0,
                                auth: ""
                            },
                            css: [],
                            js: []
                        },
                        pwdReset: {
                            comLoad: function (e) {
                                a.e("chunk-90b62210").then(function () {
                                    var t = [a("00d4")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: {
                                title: "密码找回",
                                notNeedLogin: !0,
                                auth: ""
                            },
                            css: [],
                            js: []
                        },
                        search: {
                            comLoad: function (e) {
                                Promise.all([a.e("chunk-93d6ec30"), a.e("chunk-52646bf4"), a.e("chunk-2d182ed7")]).then(function () {
                                    var t = [a("634d")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: {
                                title: "应用搜索",
                                notNeedLogin: !1,
                                auth: ""
                            },
                            css: [],
                            js: []
                        },
                        printmessage: {
                            comLoad: function (e) {
                                a.e("chunk-d6d048b4").then(function () {
                                    var t = [a("fb2e")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: {
                                title: "提示",
                                notNeedLogin: !0,
                                auth: ""
                            },
                            css: [],
                            js: []
                        },
                        outlink: {
                            comLoad: function (e) {
                                a.e("chunk-2d229604").then(function () {
                                    var t = [a("dcd3")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: {
                                title: "第三方跳转",
                                notNeedLogin: !1,
                                auth: ""
                            },
                            css: [],
                            js: []
                        },
                        scan_qrcode: {
                            comLoad: function (e) {
                                a.e("chunk-0a25f00e").then(function () {
                                    var t = [a("74a3")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: {
                                title: "确认",
                                notNeedLogin: !1,
                                auth: ""
                            },
                            css: [],
                            js: []
                        },
                        m_scan_qrcode: {
                            comLoad: function (e) {
                                a.e("chunk-776b50b1").then(function () {
                                    var t = [a("57b3")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: {
                                title: "扫码验证",
                                notNeedLogin: !1,
                                auth: ""
                            },
                            css: [],
                            js: []
                        },
                        service: {
                            comLoad: function (e) {
                                Promise.all([a.e("chunk-93d6ec30"), a.e("chunk-52646bf4"), a.e("chunk-86cd8e92")]).then(function () {
                                    var t = [a("1aa2")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: {
                                title: "服务大厅",
                                notNeedLogin: !1,
                                auth: ""
                            },
                            css: [],
                            js: []
                        },
                        ucenter: {
                            comLoad: function (e) {
                                Promise.all([a.e("chunk-93d6ec30"), a.e("chunk-52646bf4"), a.e("chunk-47957392")]).then(function () {
                                    var t = [a("fca8")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: {
                                title: "个人中心",
                                notNeedLogin: !1,
                                auth: ""
                            },
                            css: [],
                            js: []
                        },
                        upcPersonal: {
                            comLoad: function (e) {
                                Promise.all([a.e("chunk-93d6ec30"), a.e("chunk-52646bf4"), a.e("chunk-1a4f056d")]).then(function () {
                                    var t = [a("cf4b")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: {
                                title: "个人信息中心",
                                notNeedLogin: !1,
                                auth: ""
                            },
                            css: [],
                            js: []
                        },
                        personal: {
                            comLoad: function (e) {
                                Promise.all([a.e("chunk-93d6ec30"), a.e("chunk-52646bf4"), a.e("chunk-47a04560")]).then(function () {
                                    var t = [a("f778")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: {
                                title: "个人信息中心",
                                notNeedLogin: !1,
                                auth: ""
                            },
                            css: [],
                            js: []
                        },
                        m_index: {
                            comLoad: function (e) {
                                Promise.all([a.e("chunk-93d6ec30"), a.e("chunk-52646bf4"), a.e("chunk-3bce6238")]).then(function () {
                                    var t = [a("3133")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: {
                                title: "首页",
                                notNeedLogin: !1,
                                auth: ""
                            },
                            css: [],
                            js: ["js/wx/swiper.min.js"]
                        },
                        m_search: {
                            comLoad: function (e) {
                                Promise.all([a.e("chunk-93d6ec30"), a.e("chunk-52646bf4"), a.e("chunk-d89427e4")]).then(function () {
                                    var t = [a("14e0")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: {
                                title: "搜索",
                                notNeedLogin: !1,
                                auth: ""
                            },
                            css: [],
                            js: []
                        },
                        m_upcPersonal: {
                            comLoad: function (e) {
                                Promise.all([a.e("chunk-93d6ec30"), a.e("chunk-52646bf4"), a.e("chunk-621d2e04")]).then(function () {
                                    var t = [a("0a68")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: {
                                title: "个人信息中心",
                                notNeedLogin: !1,
                                auth: ""
                            },
                            css: [],
                            js: []
                        },
                        m_personal: {
                            comLoad: function (e) {
                                Promise.all([a.e("chunk-93d6ec30"), a.e("chunk-52646bf4"), a.e("chunk-bed30930")]).then(function () {
                                    var t = [a("4ddc")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: {
                                title: "个人信息中心",
                                notNeedLogin: !1,
                                auth: ""
                            },
                            css: [],
                            js: []
                        },
                        m_addapp: {
                            comLoad: function (e) {
                                a.e("chunk-7439b4d6").then(function () {
                                    var t = [a("c1e4")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: {
                                title: "添加应用",
                                notNeedLogin: !1,
                                auth: ""
                            },
                            css: [],
                            js: []
                        },
                        m_message: {
                            comLoad: function (e) {
                                Promise.all([a.e("chunk-93d6ec30"), a.e("chunk-52646bf4"), a.e("chunk-3b1ce5d8")]).then(function () {
                                    var t = [a("510d")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: {
                                title: "信息中心",
                                notNeedLogin: !1,
                                auth: ""
                            },
                            css: [],
                            js: []
                        },
                        m_upcChangeInfo: {
                            comLoad: function (e) {
                                a.e("chunk-917a1616").then(function () {
                                    var t = [a("acbb")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: {
                                title: "个人中心",
                                notNeedLogin: !1,
                                auth: ""
                            },
                            css: ["css/wx/magic-check.min.css"],
                            js: ["js/wx/mobiscroll_date.js", "js/wx/mobiscroll.js"]
                        },
                        m_changeInfo: {
                            comLoad: function (e) {
                                a.e("chunk-42d3cef2").then(function () {
                                    var t = [a("054e")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: {
                                title: "个人中心",
                                notNeedLogin: !1,
                                auth: ""
                            },
                            css: ["css/wx/magic-check.min.css"],
                            js: ["js/wx/mobiscroll_date.js", "js/wx/mobiscroll.js"]
                        },
                        m_pwdReset: {
                            comLoad: function (e) {
                                a.e("chunk-51041bd2").then(function () {
                                    var t = [a("7dd3")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: {
                                title: "重置密码",
                                notNeedLogin: !0,
                                auth: ""
                            },
                            css: [],
                            js: []
                        },
                        m_forceResetpwd: {
                            comLoad: function (e) {
                                a.e("chunk-7b2d3c6c").then(function () {
                                    var t = [a("e345")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: {
                                title: "设置密码",
                                notNeedLogin: !1,
                                auth: ""
                            },
                            css: [],
                            js: []
                        },
                        m_followEnterprise: {
                            comLoad: function (e) {
                                a.e("chunk-09d2ba7e").then(function () {
                                    var t = [a("b2ff")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: {
                                title: "关注企业号",
                                notNeedLogin: !0,
                                auth: ""
                            },
                            css: [],
                            js: []
                        },
                        appGroup: {
                            comLoad: function (e) {
                                Promise.all([a.e("chunk-93d6ec30"), a.e("chunk-52646bf4"), a.e("chunk-43a507d9")]).then(function () {
                                    var t = [a("4d80")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: {
                                title: "应用组",
                                notNeedLogin: !1,
                                auth: ""
                            },
                            css: [],
                            js: []
                        },
                        m_appGroup: {
                            comLoad: function (e) {
                                Promise.all([a.e("chunk-93d6ec30"), a.e("chunk-52646bf4"), a.e("chunk-36210c95")]).then(function () {
                                    var t = [a("279a")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: {
                                title: "应用组",
                                notNeedLogin: !1,
                                auth: ""
                            },
                            css: [],
                            js: ["js/wx/jweixin-1.3.2.js"]
                        },
                        m_downCenter: {
                            comLoad: function (e) {
                                a.e("chunk-2c9cbf7d").then(function () {
                                    var t = [a("2446")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: {
                                title: "下载中心",
                                notNeedLogin: !0,
                                auth: ""
                            },
                            css: [],
                            js: []
                        },
                        m_downloadSearch: {
                            comLoad: function (e) {
                                a.e("chunk-2c97b0ec").then(function () {
                                    var t = [a("77c0")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: {
                                title: "搜索",
                                notNeedLogin: !0,
                                auth: ""
                            },
                            css: [],
                            js: []
                        },
                        m_userIdentity: {
                            comLoad: function (e) {
                                a.e("chunk-d33ff21e").then(function () {
                                    var t = [a("20a8")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: {
                                title: "选择身份",
                                notNeedLogin: !0,
                                auth: ""
                            },
                            css: [],
                            js: []
                        },
                        m_schoolhealth: {
                            comLoad: function (e) {
                                Promise.all([a.e("chunk-93d6ec30"), a.e("chunk-6cb65fec")]).then(function () {
                                    var t = [a("fc95")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: {
                                title: "校园健康卡",
                                notNeedLogin: !0,
                                auth: ""
                            },
                            css: [],
                            js: []
                        }
                    },
                    form: {
                        editform: {
                            comLoad: function (e) {
                                Promise.all([a.e("chunk-93d6ec30"), a.e("chunk-52646bf4"), a.e("chunk-f0adbe10"), a.e("chunk-32ff8ac2"), a.e("chunk-5f55b6e0")]).then(function () {
                                    var t = [a("af06")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: {
                                title: "编辑表格",
                                notNeedLogin: !1,
                                auth: ""
                            },
                            css: [],
                            js: []
                        },
                        formpreview: {
                            comLoad: function (e) {
                                Promise.all([a.e("chunk-93d6ec30"), a.e("chunk-52646bf4"), a.e("chunk-f0adbe10"), a.e("chunk-32ff8ac2"), a.e("chunk-0a79695e")]).then(function () {
                                    var t = [a("e143")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: {
                                title: "表单预览",
                                notNeedLogin: !1,
                                auth: ""
                            },
                            css: [],
                            js: []
                        },
                        printPreviewPDF: {
                            comLoad: function (e) {
                                Promise.all([a.e("chunk-93d6ec30"), a.e("chunk-52646bf4"), a.e("chunk-f0adbe10"), a.e("chunk-32ff8ac2"), a.e("chunk-0ecf62f0")]).then(function () {
                                    var t = [a("be3d")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: {
                                title: "打印预览",
                                notNeedLogin: !1,
                                auth: ""
                            },
                            css: [],
                            js: []
                        },
                        m_formpreview: {
                            comLoad: function (e) {
                                Promise.all([a.e("chunk-93d6ec30"), a.e("chunk-52646bf4"), a.e("chunk-f0adbe10"), a.e("chunk-32ff8ac2"), a.e("chunk-72a90a08")]).then(function () {
                                    var t = [a("6bdd")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: {
                                title: "手机预览",
                                notNeedLogin: !1,
                                auth: ""
                            },
                            css: [],
                            js: []
                        }
                    },
                    process: {
                        edit: {
                            comLoad: function (e) {
                                Promise.all([a.e("chunk-93d6ec30"), a.e("chunk-52646bf4"), a.e("chunk-7273b22c"), a.e("chunk-14c4ad9f")]).then(function () {
                                    var t = [a("2194")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: {
                                title: "编辑流程",
                                notNeedLogin: !1,
                                auth: ""
                            },
                            css: [],
                            js: []
                        }
                    },
                    matter: {
                        classifyInfo: {
                            comLoad: function (e) {
                                Promise.all([a.e("chunk-93d6ec30"), a.e("chunk-52646bf4"), a.e("chunk-59b7ffc8")]).then(function () {
                                    var t = [a("0f00")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: {
                                title: "分类管理",
                                notNeedLogin: !1,
                                auth: "AppClassifyManage"
                            },
                            css: [],
                            js: []
                        },
                        classifyInfoDetail: {
                            comLoad: function (e) {
                                Promise.all([a.e("chunk-93d6ec30"), a.e("chunk-52646bf4"), a.e("chunk-9c8a29d2")]).then(function () {
                                    var t = [a("e5d2")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: {
                                title: "分类详情",
                                notNeedLogin: !1,
                                auth: ""
                            },
                            css: [],
                            js: []
                        },
                        appGroup: {
                            comLoad: function (e) {
                                Promise.all([a.e("chunk-93d6ec30"), a.e("chunk-52646bf4"), a.e("chunk-18614acc")]).then(function () {
                                    var t = [a("2424")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: {
                                title: "应用组",
                                notNeedLogin: !1,
                                auth: "AppGroupManage"
                            },
                            css: [],
                            js: ["ueditor/ueditor.config.min.js", "ueditor/ueditor.all.min.js", "ueditor/lang/zh-cn/zh-cn.min.js"]
                        },
                        materialLibrary: {
                            comLoad: function (e) {
                                Promise.all([a.e("chunk-93d6ec30"), a.e("chunk-52646bf4"), a.e("chunk-57e6a106")]).then(function () {
                                    var t = [a("cb59")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: {
                                title: "素材库",
                                notNeedLogin: !1,
                                auth: "AppMaterialManage"
                            },
                            css: [],
                            js: []
                        },
                        list: {
                            comLoad: function (e) {
                                Promise.all([a.e("chunk-93d6ec30"), a.e("chunk-52646bf4"), a.e("chunk-82f932e8")]).then(function () {
                                    var t = [a("42f8")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: {
                                title: "我的事项",
                                notNeedLogin: !1,
                                auth: "AppManage"
                            },
                            css: [],
                            js: []
                        },
                        newmatter: {
                            comLoad: function (e) {
                                Promise.all([a.e("chunk-93d6ec30"), a.e("chunk-52646bf4"), a.e("chunk-7273b22c"), a.e("chunk-72e7daef")]).then(function () {
                                    var t = [a("e3f9")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: {
                                title: "添加事项",
                                notNeedLogin: !1,
                                auth: ""
                            },
                            css: [],
                            js: ["ueditor/ueditor.config.min.js", "ueditor/ueditor.all.min.js", "ueditor/lang/zh-cn/zh-cn.min.js"]
                        },
                        matterbpmn: {
                            comLoad: function (e) {
                                Promise.all([a.e("chunk-93d6ec30"), a.e("chunk-52646bf4"), a.e("chunk-4fe55158")]).then(function () {
                                    var t = [a("cee8")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: {
                                title: "版本编辑",
                                notNeedLogin: !1,
                                auth: ""
                            },
                            css: [],
                            js: []
                        },
                        archivedata: {
                            comLoad: function (e) {
                                Promise.all([a.e("chunk-93d6ec30"), a.e("chunk-52646bf4"), a.e("chunk-785926d5")]).then(function () {
                                    var t = [a("53ef")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: {
                                title: "查看归档数据",
                                notNeedLogin: !1,
                                auth: ""
                            },
                            css: [],
                            js: []
                        },
                        archiveChart: {
                            comLoad: function (e) {
                                Promise.all([a.e("chunk-93d6ec30"), a.e("chunk-52646bf4"), a.e("chunk-9cec785e")]).then(function () {
                                    var t = [a("4e0b")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: {
                                title: "图表统计",
                                notNeedLogin: !1,
                                auth: ""
                            },
                            css: [],
                            js: ["js/echarts.simple.min.js"]
                        },
                        evaluate: {
                            comLoad: function (e) {
                                Promise.all([a.e("chunk-93d6ec30"), a.e("chunk-52646bf4"), a.e("chunk-dde75352")]).then(function () {
                                    var t = [a("e5d1")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: {
                                title: "评价",
                                notNeedLogin: !1,
                                auth: ""
                            },
                            css: [],
                            js: []
                        },
                        detail: {
                            comLoad: function (e) {
                                Promise.all([a.e("chunk-93d6ec30"), a.e("chunk-52646bf4"), a.e("chunk-f0adbe10"), a.e("chunk-be6aa578")]).then(function () {
                                    var t = [a("f342")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: {
                                title: "服务详情",
                                notNeedLogin: !1,
                                auth: ""
                            },
                            css: [],
                            js: []
                        },
                        start: {
                            comLoad: function (e) {
                                Promise.all([a.e("chunk-93d6ec30"), a.e("chunk-52646bf4"), a.e("chunk-f0adbe10"), a.e("chunk-32ff8ac2"), a.e("chunk-5d1b7111")]).then(function () {
                                    var t = [a("5dba")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: {
                                title: "发起事项",
                                notNeedLogin: !1,
                                auth: ""
                            },
                            css: [],
                            js: ["ueditor/ueditor.config.min.js", "ueditor/ueditor.all.min.js", "ueditor/lang/zh-cn/zh-cn.min.js"]
                        },
                        startStep: {
                            comLoad: function (e) {
                                Promise.all([a.e("chunk-93d6ec30"), a.e("chunk-52646bf4"), a.e("chunk-f0adbe10"), a.e("chunk-32ff8ac2"), a.e("chunk-6696147b")]).then(function () {
                                    var t = [a("b4e1")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: {
                                title: "发起事项",
                                notNeedLogin: !1,
                                auth: ""
                            },
                            css: [],
                            js: ["ueditor/ueditor.config.min.js", "ueditor/ueditor.all.min.js", "ueditor/lang/zh-cn/zh-cn.min.js"]
                        },
                        print: {
                            comLoad: function (e) {
                                Promise.all([a.e("chunk-93d6ec30"), a.e("chunk-52646bf4"), a.e("chunk-f0adbe10"), a.e("chunk-32ff8ac2"), a.e("chunk-68a5d9e5")]).then(function () {
                                    var t = [a("4aaf")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: {
                                title: "打印",
                                notNeedLogin: !1,
                                auth: ""
                            },
                            css: [],
                            js: []
                        },
                        qrcode: {
                            comLoad: function (e) {
                                Promise.all([a.e("chunk-93d6ec30"), a.e("chunk-52646bf4"), a.e("chunk-f0adbe10"), a.e("chunk-32ff8ac2"), a.e("chunk-81dc265e")]).then(function () {
                                    var t = [a("71dc")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: {
                                title: "打印",
                                notNeedLogin: !1,
                                auth: ""
                            },
                            css: [],
                            js: []
                        },
                        details: {
                            comLoad: function (e) {
                                Promise.all([a.e("chunk-93d6ec30"), a.e("chunk-52646bf4"), a.e("chunk-f0adbe10"), a.e("chunk-32ff8ac2"), a.e("chunk-81dc265e")]).then(function () {
                                    var t = [a("71dc")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: {
                                title: "详情查看",
                                notNeedLogin: !1,
                                auth: ""
                            },
                            css: [],
                            js: []
                        },
                        index: {
                            comLoad: function (e) {
                                Promise.all([a.e("chunk-93d6ec30"), a.e("chunk-52646bf4"), a.e("chunk-2415628e")]).then(function () {
                                    var t = [a("d8e3")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: {
                                title: "我的事项",
                                notNeedLogin: !1,
                                auth: ""
                            },
                            css: [],
                            js: []
                        },
                        examine: {
                            comLoad: function (e) {
                                Promise.all([a.e("chunk-93d6ec30"), a.e("chunk-52646bf4"), a.e("chunk-f0adbe10"), a.e("chunk-32ff8ac2"), a.e("chunk-e2341a3c")]).then(function () {
                                    var t = [a("2bb2")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: {
                                title: "我的签批",
                                notNeedLogin: !1,
                                auth: ""
                            },
                            css: [],
                            js: []
                        },
                        rejectStep: {
                            comLoad: function (e) {
                                Promise.all([a.e("chunk-93d6ec30"), a.e("chunk-52646bf4"), a.e("chunk-f0adbe10"), a.e("chunk-32ff8ac2"), a.e("chunk-738f2e6a")]).then(function () {
                                    var t = [a("047b")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: {
                                title: "修改",
                                notNeedLogin: !1,
                                auth: ""
                            },
                            css: [],
                            js: []
                        },
                        m_detail: {
                            comLoad: function (e) {
                                Promise.all([a.e("chunk-93d6ec30"), a.e("chunk-52646bf4"), a.e("chunk-205b3c0c")]).then(function () {
                                    var t = [a("2a81")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: {
                                title: "服务详情",
                                notNeedLogin: !1,
                                auth: ""
                            },
                            css: [],
                            js: []
                        },
                        sealcheckcode: {
                            comLoad: function (e) {
                                a.e("chunk-1c070aac").then(function () {
                                    var t = [a("bcff")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: {
                                title: "签章验证",
                                notNeedLogin: !1,
                                auth: ""
                            },
                            css: [],
                            js: []
                        },
                        m_start: {
                            comLoad: function (e) {
                                Promise.all([a.e("chunk-93d6ec30"), a.e("chunk-52646bf4"), a.e("chunk-f0adbe10"), a.e("chunk-32ff8ac2"), a.e("chunk-cd0796ca")]).then(function () {
                                    var t = [a("78b1")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: {
                                title: "发起事项",
                                notNeedLogin: !1,
                                auth: ""
                            },
                            css: [],
                            js: []
                        },
                        m_startStep: {
                            comLoad: function (e) {
                                Promise.all([a.e("chunk-93d6ec30"), a.e("chunk-52646bf4"), a.e("chunk-f0adbe10"), a.e("chunk-32ff8ac2"), a.e("chunk-2f1451e7")]).then(function () {
                                    var t = [a("abd5")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: {
                                title: "发起事项",
                                notNeedLogin: !1,
                                auth: ""
                            },
                            css: [],
                            js: []
                        },
                        m_launch: {
                            comLoad: function (e) {
                                Promise.all([a.e("chunk-93d6ec30"), a.e("chunk-52646bf4"), a.e("chunk-e9f20a10"), a.e("chunk-483ecc60")]).then(function () {
                                    var t = [a("c811")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: {
                                title: "我的发起",
                                notNeedLogin: !1,
                                auth: ""
                            },
                            css: [],
                            js: []
                        },
                        m_launchSearch: {
                            comLoad: function (e) {
                                Promise.all([a.e("chunk-93d6ec30"), a.e("chunk-52646bf4"), a.e("chunk-e9f20a10"), a.e("chunk-06fc6ba5")]).then(function () {
                                    var t = [a("8aa5")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: {
                                title: "搜索",
                                notNeedLogin: !1,
                                auth: ""
                            },
                            css: [],
                            js: []
                        },
                        m_index: {
                            comLoad: function (e) {
                                Promise.all([a.e("chunk-93d6ec30"), a.e("chunk-52646bf4"), a.e("chunk-e9f20a10"), a.e("chunk-483ecc60"), a.e("chunk-666c87a3")]).then(function () {
                                    var t = [a("8ddb")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: {
                                title: "我的任务",
                                notNeedLogin: !1,
                                auth: ""
                            },
                            css: [],
                            js: []
                        },
                        m_search: {
                            comLoad: function (e) {
                                Promise.all([a.e("chunk-93d6ec30"), a.e("chunk-52646bf4"), a.e("chunk-e9f20a10"), a.e("chunk-388c8778")]).then(function () {
                                    var t = [a("8d29")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: {
                                title: "搜索",
                                notNeedLogin: !1,
                                auth: ""
                            },
                            css: [],
                            js: []
                        },
                        m_examine: {
                            comLoad: function (e) {
                                Promise.all([a.e("chunk-93d6ec30"), a.e("chunk-52646bf4"), a.e("chunk-f0adbe10"), a.e("chunk-32ff8ac2"), a.e("chunk-3eda52b8")]).then(function () {
                                    var t = [a("7408")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: {
                                title: "我的签批",
                                notNeedLogin: !1,
                                auth: ""
                            },
                            css: [],
                            js: []
                        },
                        m_rejectStep: {
                            comLoad: function (e) {
                                Promise.all([a.e("chunk-93d6ec30"), a.e("chunk-52646bf4"), a.e("chunk-f0adbe10"), a.e("chunk-32ff8ac2"), a.e("chunk-377f3f1b")]).then(function () {
                                    var t = [a("57c7")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: {
                                title: "我的签批",
                                notNeedLogin: !1,
                                auth: ""
                            },
                            css: [],
                            js: []
                        },
                        preview: {
                            comLoad: function (e) {
                                Promise.all([a.e("chunk-93d6ec30"), a.e("chunk-52646bf4"), a.e("chunk-f0adbe10"), a.e("chunk-32ff8ac2"), a.e("chunk-31cff43a")]).then(function () {
                                    var t = [a("77c3")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: {
                                title: "预览表单",
                                notNeedLogin: !1,
                                auth: ""
                            },
                            css: [],
                            js: []
                        }
                    },
                    report: {
                        reportForm: {
                            comLoad: function (e) {
                                Promise.all([a.e("chunk-93d6ec30"), a.e("chunk-52646bf4"), a.e("chunk-46c92a3d")]).then(function () {
                                    var t = [a("fa8b")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: {
                                title: "报表设置",
                                notNeedLogin: !1,
                                auth: "ReportManage"
                            },
                            css: [],
                            js: []
                        },
                        newReport: {
                            comLoad: function (e) {
                                Promise.all([a.e("chunk-93d6ec30"), a.e("chunk-52646bf4"), a.e("chunk-4ec92e32")]).then(function () {
                                    var t = [a("7ab8")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: {
                                title: "新建报表",
                                notNeedLogin: !1,
                                auth: ""
                            },
                            css: [],
                            js: []
                        },
                        generalReportDetail: {
                            comLoad: function (e) {
                                Promise.all([a.e("chunk-93d6ec30"), a.e("chunk-52646bf4"), a.e("chunk-f0adbe10"), a.e("chunk-052d0b21"), a.e("chunk-35ad88fb")]).then(function () {
                                    var t = [a("a5e8")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: {
                                title: "报表详情",
                                notNeedLogin: !1,
                                auth: ""
                            },
                            css: [],
                            js: []
                        },
                        graphicReportDetail: {
                            comLoad: function (e) {
                                Promise.all([a.e("chunk-93d6ec30"), a.e("chunk-52646bf4"), a.e("chunk-f0adbe10"), a.e("chunk-052d0b21"), a.e("chunk-252e2bbc")]).then(function () {
                                    var t = [a("d652")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: {
                                title: "报表详情",
                                notNeedLogin: !1,
                                auth: ""
                            },
                            css: [],
                            js: ["js/echarts.simple.min.js"]
                        },
                        threeGeneralReportDetail: {
                            comLoad: function (e) {
                                Promise.all([a.e("chunk-93d6ec30"), a.e("chunk-52646bf4"), a.e("chunk-f0adbe10"), a.e("chunk-052d0b21"), a.e("chunk-08d235f6")]).then(function () {
                                    var t = [a("8b49")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: {
                                title: "报表详情",
                                notNeedLogin: !1,
                                auth: ""
                            },
                            css: [],
                            js: []
                        },
                        threeGraphicReportDetail: {
                            comLoad: function (e) {
                                Promise.all([a.e("chunk-93d6ec30"), a.e("chunk-52646bf4"), a.e("chunk-f0adbe10"), a.e("chunk-052d0b21"), a.e("chunk-43d43526")]).then(function () {
                                    var t = [a("6c47")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: {
                                title: "报表详情",
                                notNeedLogin: !1,
                                auth: ""
                            },
                            css: [],
                            js: ["js/echarts.simple.min.js"]
                        },
                        sorting: {
                            comLoad: function (e) {
                                Promise.all([a.e("chunk-93d6ec30"), a.e("chunk-52646bf4"), a.e("chunk-0a0940d2")]).then(function () {
                                    var t = [a("d108")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: {
                                title: "排序管理",
                                notNeedLogin: !1,
                                auth: ""
                            },
                            css: [],
                            js: []
                        },
                        index: {
                            comLoad: function (e) {
                                Promise.all([a.e("chunk-93d6ec30"), a.e("chunk-52646bf4"), a.e("chunk-3ec117f6")]).then(function () {
                                    var t = [a("b9f3")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: {
                                title: "数据中心",
                                notNeedLogin: !1,
                                auth: ""
                            },
                            css: [],
                            js: []
                        },
                        detail: {
                            comLoad: function (e) {
                                Promise.all([a.e("chunk-93d6ec30"), a.e("chunk-52646bf4"), a.e("chunk-f0adbe10"), a.e("chunk-052d0b21"), a.e("chunk-06cfb6e6")]).then(function () {
                                    var t = [a("4e95")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: {
                                title: "我的数据",
                                notNeedLogin: !1,
                                auth: ""
                            },
                            css: [],
                            js: ["js/echarts.simple.min.js"]
                        },
                        print: {
                            comLoad: function (e) {
                                Promise.all([a.e("chunk-93d6ec30"), a.e("chunk-52646bf4"), a.e("chunk-f0adbe10"), a.e("chunk-052d0b21"), a.e("chunk-4565e728")]).then(function () {
                                    var t = [a("a876")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: {
                                title: "打印",
                                notNeedLogin: !1,
                                auth: ""
                            },
                            css: [],
                            js: ["js/echarts.simple.min.js"]
                        },
                        m_index: {
                            comLoad: function (e) {
                                Promise.all([a.e("chunk-93d6ec30"), a.e("chunk-52646bf4"), a.e("chunk-064faaa6")]).then(function () {
                                    var t = [a("c28b")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: {
                                title: "数据中心",
                                notNeedLogin: !1,
                                auth: ""
                            },
                            css: [],
                            js: []
                        },
                        m_search: {
                            comLoad: function (e) {
                                Promise.all([a.e("chunk-93d6ec30"), a.e("chunk-52646bf4"), a.e("chunk-2f2ca2ce")]).then(function () {
                                    var t = [a("341c")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: {
                                title: "报表查询",
                                notNeedLogin: !1,
                                auth: ""
                            },
                            css: [],
                            js: []
                        },
                        m_detail: {
                            comLoad: function (e) {
                                Promise.all([a.e("chunk-93d6ec30"), a.e("chunk-52646bf4"), a.e("chunk-1fea3aa2")]).then(function () {
                                    var t = [a("bf77")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: {
                                title: "报表详情",
                                notNeedLogin: !1,
                                auth: ""
                            },
                            css: [],
                            js: ["js/echarts.simple.min.js"]
                        }
                    },
                    user: {
                        userData: {
                            comLoad: function (e) {
                                Promise.all([a.e("chunk-93d6ec30"), a.e("chunk-52646bf4"), a.e("chunk-ac762624")]).then(function () {
                                    var t = [a("4d6b")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: {
                                title: "用户数据",
                                notNeedLogin: !1,
                                auth: "DepartManage"
                            },
                            css: [],
                            js: []
                        },
                        newuser: {
                            comLoad: function (e) {
                                Promise.all([a.e("chunk-93d6ec30"), a.e("chunk-52646bf4"), a.e("chunk-58f1df36")]).then(function () {
                                    var t = [a("3a7a")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: {
                                title: "新建用户",
                                notNeedLogin: !1,
                                auth: ""
                            },
                            css: [],
                            js: []
                        },
                        teamAdmin: {
                            comLoad: function (e) {
                                Promise.all([a.e("chunk-93d6ec30"), a.e("chunk-52646bf4"), a.e("chunk-5c8a8beb")]).then(function () {
                                    var t = [a("92a8")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: {
                                title: "标签管理",
                                notNeedLogin: !1,
                                auth: "TeamCategoryManage"
                            },
                            css: [],
                            js: []
                        },
                        departManage: {
                            comLoad: function (e) {
                                Promise.all([a.e("chunk-93d6ec30"), a.e("chunk-52646bf4"), a.e("chunk-85f1646a")]).then(function () {
                                    var t = [a("2d21")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: {
                                title: "部门管理",
                                notNeedLogin: !1,
                                auth: "DepartManage"
                            },
                            css: [],
                            js: []
                        },
                        postManage: {
                            comLoad: function (e) {
                                Promise.all([a.e("chunk-93d6ec30"), a.e("chunk-52646bf4"), a.e("chunk-0bf7f9ff")]).then(function () {
                                    var t = [a("459d2")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: {
                                title: "岗位管理",
                                notNeedLogin: !1,
                                auth: "JobManage"
                            },
                            css: [],
                            js: []
                        },
                        signManage: {
                            comLoad: function (e) {
                                Promise.all([a.e("chunk-93d6ec30"), a.e("chunk-52646bf4"), a.e("chunk-f532982c")]).then(function () {
                                    var t = [a("e77e")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: {
                                title: "公章管理",
                                notNeedLogin: !1,
                                auth: ""
                            },
                            css: [],
                            js: []
                        },
                        signatureRecord: {
                            comLoad: function (e) {
                                Promise.all([a.e("chunk-93d6ec30"), a.e("chunk-52646bf4"), a.e("chunk-5d2111d6")]).then(function () {
                                    var t = [a("c0a5")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: {
                                title: "个人签章记录",
                                notNeedLogin: !1,
                                auth: "SignManage"
                            },
                            css: [],
                            js: []
                        },
                        messageAuth: {
                            comLoad: function (e) {
                                Promise.all([a.e("chunk-93d6ec30"), a.e("chunk-52646bf4"), a.e("chunk-cc8775f0")]).then(function () {
                                    var t = [a("0fa8")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: {
                                title: "信息权限",
                                notNeedLogin: !1,
                                auth: "UserinfoAuthManage"
                            },
                            css: [],
                            js: []
                        }
                    },
                    backHome: {
                        index: {
                            comLoad: function (e) {
                                Promise.all([a.e("chunk-93d6ec30"), a.e("chunk-52646bf4"), a.e("chunk-89ce40fe")]).then(function () {
                                    var t = [a("8a27")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: {
                                title: "后台首页",
                                notNeedLogin: !1,
                                auth: ""
                            },
                            css: [],
                            js: []
                        },
                        message: {
                            comLoad: function (e) {
                                Promise.all([a.e("chunk-93d6ec30"), a.e("chunk-52646bf4"), a.e("chunk-7f923980")]).then(function () {
                                    var t = [a("f1cf")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: {
                                title: "站内通知",
                                notNeedLogin: !1,
                                auth: "SiteNoticeManage"
                            },
                            css: [],
                            js: []
                        },
                        newNotice: {
                            comLoad: function (e) {
                                Promise.all([a.e("chunk-93d6ec30"), a.e("chunk-52646bf4"), a.e("chunk-a36a538e")]).then(function () {
                                    var t = [a("d731")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: {
                                title: "新建通知",
                                notNeedLogin: !1,
                                auth: "SiteNoticeManage"
                            },
                            css: [],
                            js: ["ueditor/ueditor.config.js", "ueditor/ueditor.all.js", "ueditor/lang/zh-cn/zh-cn.js"]
                        },
                        siteConfig: {
                            comLoad: function (e) {
                                Promise.all([a.e("chunk-93d6ec30"), a.e("chunk-52646bf4"), a.e("chunk-b45af54e")]).then(function () {
                                    var t = [a("2493")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: {
                                title: "网站配置",
                                notNeedLogin: !1,
                                auth: "FrontEndManage"
                            },
                            css: [],
                            js: []
                        },
                        carousel: {
                            comLoad: function (e) {
                                Promise.all([a.e("chunk-93d6ec30"), a.e("chunk-52646bf4"), a.e("chunk-5912e734")]).then(function () {
                                    var t = [a("0192")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: {
                                title: "轮播图管理",
                                notNeedLogin: !1,
                                auth: "FrontEndManage"
                            },
                            css: [],
                            js: []
                        },
                        appManage: {
                            comLoad: function (e) {
                                Promise.all([a.e("chunk-93d6ec30"), a.e("chunk-52646bf4"), a.e("chunk-7ee05792")]).then(function () {
                                    var t = [a("da24")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: {
                                title: "应用管理",
                                notNeedLogin: !1,
                                auth: "FrontEndManage"
                            },
                            css: [],
                            js: []
                        },
                        comment: {
                            comLoad: function (e) {
                                Promise.all([a.e("chunk-93d6ec30"), a.e("chunk-52646bf4"), a.e("chunk-d2260cfa")]).then(function () {
                                    var t = [a("1582")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: {
                                title: "评价管理",
                                notNeedLogin: !1,
                                auth: "CommentManage"
                            },
                            css: [],
                            js: []
                        },
                        infoChannel: {
                            comLoad: function (e) {
                                Promise.all([a.e("chunk-93d6ec30"), a.e("chunk-52646bf4"), a.e("chunk-23d4be1a")]).then(function () {
                                    var t = [a("e95a")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: {
                                title: "消息渠道管理",
                                notNeedLogin: !1,
                                auth: "MessageChannelManage"
                            },
                            css: [],
                            js: []
                        },
                        wordManage: {
                            comLoad: function (e) {
                                Promise.all([a.e("chunk-93d6ec30"), a.e("chunk-52646bf4"), a.e("chunk-d101f7ee")]).then(function () {
                                    var t = [a("5912")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: {
                                title: "敏感词管理",
                                notNeedLogin: !1,
                                auth: "SensitiveWordManage"
                            },
                            css: [],
                            js: []
                        },
                        companyManage: {
                            comLoad: function (e) {
                                Promise.all([a.e("chunk-93d6ec30"), a.e("chunk-52646bf4"), a.e("chunk-3a7e2760")]).then(function () {
                                    var t = [a("4591")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: {
                                title: "微信管理",
                                notNeedLogin: !1,
                                auth: "WechatManage"
                            },
                            css: [],
                            js: ["ueditor/ueditor.config.js", "ueditor/ueditor.all.js", "ueditor/lang/zh-cn/zh-cn.js"]
                        },
                        otherSer: {
                            comLoad: function (e) {
                                Promise.all([a.e("chunk-93d6ec30"), a.e("chunk-52646bf4"), a.e("chunk-1f7f9f18")]).then(function () {
                                    var t = [a("97b9")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: {
                                title: "第三方服务",
                                notNeedLogin: !1,
                                auth: ""
                            },
                            css: [],
                            js: []
                        },
                        backAuth: {
                            comLoad: function (e) {
                                Promise.all([a.e("chunk-93d6ec30"), a.e("chunk-52646bf4"), a.e("chunk-4888bb2e")]).then(function () {
                                    var t = [a("c9af")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: {
                                title: "后台权限",
                                notNeedLogin: !1,
                                auth: "super"
                            },
                            css: [],
                            js: []
                        },
                        statistic: {
                            comLoad: function (e) {
                                Promise.all([a.e("chunk-93d6ec30"), a.e("chunk-52646bf4"), a.e("chunk-1e851f9b")]).then(function () {
                                    var t = [a("151a")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: {
                                title: "统计",
                                notNeedLogin: !1,
                                auth: "StatisticsManage"
                            },
                            css: [],
                            js: ["js/echarts.simple.min.js"]
                        },
                        admin: {
                            comLoad: function (e) {
                                Promise.all([a.e("chunk-93d6ec30"), a.e("chunk-52646bf4"), a.e("chunk-7575032e")]).then(function () {
                                    var t = [a("240d")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: {
                                title: "管理员",
                                notNeedLogin: !1,
                                auth: "super"
                            },
                            css: [],
                            js: []
                        },
                        systemConfig: {
                            comLoad: function (e) {
                                Promise.all([a.e("chunk-93d6ec30"), a.e("chunk-52646bf4"), a.e("chunk-03c1e51b")]).then(function () {
                                    var t = [a("e1ff")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: {
                                title: "系统配置",
                                notNeedLogin: !1,
                                auth: "SystemConfigManage"
                            },
                            css: [],
                            js: []
                        },
                        miniprogramConfig: {
                            comLoad: function (e) {
                                Promise.all([a.e("chunk-93d6ec30"), a.e("chunk-52646bf4"), a.e("chunk-795a3056")]).then(function () {
                                    var t = [a("c0b0")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: {
                                title: "小程序管理",
                                notNeedLogin: !1,
                                auth: "MiniProgramManage"
                            },
                            css: [],
                            js: []
                        },
                        fileConfig: {
                            comLoad: function (e) {
                                Promise.all([a.e("chunk-93d6ec30"), a.e("chunk-52646bf4"), a.e("chunk-32ff8ac2"), a.e("chunk-6b05f859")]).then(function () {
                                    var t = [a("7e72")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: {
                                title: "文件配置",
                                notNeedLogin: !1,
                                auth: "FileConfigManage"
                            },
                            css: [],
                            js: []
                        },
                        deploylog: {
                            comLoad: function (e) {
                                Promise.all([a.e("chunk-93d6ec30"), a.e("chunk-52646bf4"), a.e("chunk-4a6d8cf0")]).then(function () {
                                    var t = [a("1eba")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: {
                                title: "操作日志",
                                notNeedLogin: !1,
                                auth: "OperationLogManage"
                            },
                            css: [],
                            js: []
                        },
                        accredit: {
                            comLoad: function (e) {
                                Promise.all([a.e("chunk-93d6ec30"), a.e("chunk-52646bf4"), a.e("chunk-5331590c")]).then(function () {
                                    var t = [a("c8c5")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: {
                                title: "授权",
                                notNeedLogin: !1,
                                auth: ""
                            },
                            css: [],
                            js: []
                        },
                        record: {
                            comLoad: function (e) {
                                Promise.all([a.e("chunk-93d6ec30"), a.e("chunk-52646bf4"), a.e("chunk-73d0c6bf")]).then(function () {
                                    var t = [a("fb1b")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: {
                                title: "授权记录",
                                notNeedLogin: !1,
                                auth: ""
                            },
                            css: [],
                            js: []
                        },
                        noneAuth: {
                            comLoad: function (e) {
                                Promise.all([a.e("chunk-93d6ec30"), a.e("chunk-52646bf4"), a.e("chunk-2d0b95da")]).then(function () {
                                    var t = [a("3348")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: {
                                title: "暂无权限",
                                notNeedLogin: !1,
                                auth: ""
                            },
                            css: [],
                            js: []
                        }
                    },
                    data: {
                        databaseSet: {
                            comLoad: function (e) {
                                Promise.all([a.e("chunk-93d6ec30"), a.e("chunk-52646bf4"), a.e("chunk-2d0b6e7a")]).then(function () {
                                    var t = [a("1ec3")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: {
                                title: "数据库设置",
                                notNeedLogin: !1,
                                auth: "DatabaseManage"
                            },
                            css: [],
                            js: []
                        },
                        dataSource: {
                            comLoad: function (e) {
                                Promise.all([a.e("chunk-93d6ec30"), a.e("chunk-52646bf4"), a.e("chunk-0f5c621f")]).then(function () {
                                    var t = [a("8191")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: {
                                title: "数据源设置",
                                notNeedLogin: !1,
                                auth: "DatabaseManage"
                            },
                            css: [],
                            js: []
                        },
                        promptSource: {
                            comLoad: function (e) {
                                Promise.all([a.e("chunk-93d6ec30"), a.e("chunk-52646bf4"), a.e("chunk-520a8c66")]).then(function () {
                                    var t = [a("cad0")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: {
                                title: "提示组件设置",
                                notNeedLogin: !1,
                                auth: "DatabaseManage"
                            },
                            css: [],
                            js: []
                        },
                        verificationSource: {
                            comLoad: function (e) {
                                Promise.all([a.e("chunk-93d6ec30"), a.e("chunk-52646bf4"), a.e("chunk-582f4b2a")]).then(function () {
                                    var t = [a("f8a4")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: {
                                title: "验证组件设置",
                                notNeedLogin: !1,
                                auth: "DatabaseManage"
                            },
                            css: [],
                            js: []
                        },
                        widgetSet: {
                            comLoad: function (e) {
                                Promise.all([a.e("chunk-93d6ec30"), a.e("chunk-52646bf4"), a.e("chunk-f48fd4fa")]).then(function () {
                                    var t = [a("704c")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: {
                                title: "控件规则设置",
                                notNeedLogin: !1,
                                auth: "DatabaseManage"
                            },
                            css: [],
                            js: []
                        },
                        firstMatter: {
                            comLoad: function (e) {
                                Promise.all([a.e("chunk-93d6ec30"), a.e("chunk-52646bf4"), a.e("chunk-1ad4b1ee")]).then(function () {
                                    var t = [a("6ab5")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: {
                                title: "前置事项条件",
                                notNeedLogin: !1,
                                auth: "DatabaseManage"
                            },
                            css: [],
                            js: []
                        },
                        trigger: {
                            comLoad: function (e) {
                                Promise.all([a.e("chunk-93d6ec30"), a.e("chunk-52646bf4"), a.e("chunk-6de5407c")]).then(function () {
                                    var t = [a("deb5")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: {
                                title: "监听器",
                                notNeedLogin: !1,
                                auth: "DatabaseManage"
                            },
                            css: [],
                            js: []
                        },
                        ocrAdmin: {
                            comLoad: function (e) {
                                Promise.all([a.e("chunk-93d6ec30"), a.e("chunk-52646bf4"), a.e("chunk-1865ea2a")]).then(function () {
                                    var t = [a("d9a7")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: {
                                title: "OCR管理",
                                notNeedLogin: !1,
                                auth: "DatabaseManage"
                            },
                            css: [],
                            js: []
                        },
                        timingTask: {
                            comLoad: function (e) {
                                Promise.all([a.e("chunk-93d6ec30"), a.e("chunk-52646bf4"), a.e("chunk-f47f9924")]).then(function () {
                                    var t = [a("fa00")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: {
                                title: "定时任务",
                                notNeedLogin: !1,
                                auth: "DatabaseManage"
                            },
                            css: [],
                            js: []
                        },
                        signal: {
                            comLoad: function (e) {
                                Promise.all([a.e("chunk-93d6ec30"), a.e("chunk-52646bf4"), a.e("chunk-31df845a")]).then(function () {
                                    var t = [a("cc88")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: {
                                title: "信号管理",
                                notNeedLogin: !1,
                                auth: ""
                            },
                            css: [],
                            js: []
                        }
                    },
                    info: {
                        auth: {
                            comLoad: function (e) {
                                Promise.all([a.e("chunk-93d6ec30"), a.e("chunk-52646bf4"), a.e("chunk-3d9d0e28")]).then(function () {
                                    var t = [a("b361")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: {
                                title: "信息权限",
                                notNeedLogin: !1,
                                auth: ""
                            },
                            css: [],
                            js: []
                        },
                        examine: {
                            comLoad: function (e) {
                                Promise.all([a.e("chunk-93d6ec30"), a.e("chunk-52646bf4"), a.e("chunk-cd91c9d4")]).then(function () {
                                    var t = [a("817d")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: {
                                title: "信息审核",
                                notNeedLogin: !1,
                                auth: ""
                            },
                            css: [],
                            js: []
                        },
                        query: {
                            comLoad: function (e) {
                                Promise.all([a.e("chunk-93d6ec30"), a.e("chunk-52646bf4"), a.e("chunk-2b9bd79e")]).then(function () {
                                    var t = [a("4f9f")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: {
                                title: "信息查询",
                                notNeedLogin: !1,
                                auth: ""
                            },
                            css: [],
                            js: []
                        }
                    },
                    common: {}
                }
            },
            vt = new bt(yt);
        vt.init = function () {
            var e = this.loadRouter();
            return this.beforeEnterModule(e), e
        }, vt.pcToMobile = function (e, t, a) {
            var n = t.matched && t.matched.length && t.matched[0];
            if (!n) return !1;
            var i = commonHelper.isWeixin().isPhone || window.innerWidth <= 640,
                c = n.path,
                o = -1 !== c.indexOf("m_"),
                s = appConfig.pcMobileChange;
            if (appConfig.onlyClient()) {
                var r = "mobile" == appConfig.onlyClient();
                i = r
            }
            if (i !== o) {
                var u = o ? "mobilePath" : "pcPath",
                    d = o ? "pcPath" : "mobilePath",
                    l = !1;
                s.forEach((function (n) {
                    if (n[u] == c) {
                        switch (a(), n.type) {
                            case 1:
                                e.replace({
                                    path: n[d],
                                    query: t.query
                                });
                                break;
                            case 2:
                                n.changeFunc(e, n[d], t);
                                break
                        }
                        l = !0
                    }
                }))
            }
            return l
        }, vt.setMobileRem = function (e) {
            var t = e.matched && e.matched.length && e.matched[0];
            if (!t) return !1;
            window.removeEventListener("resize", this.changSize), -1 !== t.path.indexOf("m_") ? (this.changSize(), window.addEventListener("resize", this.changSize, !1)) : document.documentElement.style.fontSize = ""
        }, vt.changSize = function () {
            var e = document.documentElement.clientWidth;
            e = e <= 480 ? e : 480, e = e >= 320 ? e : 320, document.documentElement.style.fontSize = 100 * e / 375 + "px"
        }, vt.beforeEnterModule = function (e) {
            var t = this;
            e.beforeEach((function (a, n, i) {
                if (a.meta.notNeedLogin || gt["a"].checkLogin()) {
                    if (t.pcToMobile(e, a, i)) return !1;
                    a.meta.auth && !gt["a"].queryControl(a.meta.auth) && e.replace({
                        path: "/backHome/noneAuth"
                    }), kt["a"].deleteAll(), kt["a"].add(a.query, "url"), t.setMobileRem(a), gt["a"].setSiteConfig((function () {
                        i()
                    }))
                } else gt["a"].toLogin()
            })), e.afterEach((function (e) {
                n["default"].prototype.appCommonH.postTimeLine(3), "pku" === commonHelper.getWebId() && window.webkit && window.webkit.messageHandlers.enterDetailWebView.postMessage(appConfig.baseUrl + e.fullPath.substr(1))
            }))
        };
        var Lt, St, wt, jt = vt,
            It = a("9f3a"),
            Ct = (a("e18c"), a("af86"), a("ce3c")),
            Pt = "SET_ALLPLUGINS",
            Tt = "ADD_STARTLOADING",
            Nt = "REDUCE_STARTLOADING",
            _t = "SET_ALLPRINTMAKE",
            xt = "SET_PRINTMAKE",
            Dt = "DEL_PRINTMAKE",
            At = "SET_PRIMARYUID",
            Ot = "SET_STARTERDEPARID",
            Et = "SET_ISPRINTMAKE",
            Mt = "SET_TABLEPAGEINFO",
            Rt = "SET_PRINTSTYLE",
            Ut = "SET_FORMLOADED",
            Bt = "ADD_WARNING",
            Ft = "CLEAR_WARNING",
            Ht = "SET_CHILDTABLE",
            Kt = "CHILDDATASOURCE",
            $t = "CHILDNOCANSOURCE",
            qt = "CHILDNOCANSOURCEKEYS",
            Wt = "REPEAT_OPERATIONALERT",
            Jt = "SET_SELECTTD",
            Gt = "REFRESH_RTABLE",
            zt = "SET_FORMSTATUS",
            Vt = "REFRESH_DATASOURCE",
            Yt = "RETABLE_IDS",
            Xt = "SET_SORT",
            Qt = (Lt = {}, Object(Ct["a"])(Lt, Pt, (function (e, t) {
                var a = t.id ? t.id : "0";
                n["default"].set(e.allplugin, a, t.allplugin)
            })), Object(Ct["a"])(Lt, Tt, (function (e) {
                e.matterLoading++
            })), Object(Ct["a"])(Lt, Nt, (function (e) {
                e.matterLoading--
            })), Object(Ct["a"])(Lt, _t, (function (e, t) {
                var a = t.fid ? t.fid : 0;
                n["default"].set(e.repeatPrintInfo, a, t.data)
            })), Object(Ct["a"])(Lt, xt, (function (e, t) {
                var a = t.fid ? t.fid : 0,
                    i = t.tid ? t.tid : 0,
                    c = t.trid ? t.trid : 0;
                e.repeatPrintInfo[a] || n["default"].set(e.repeatPrintInfo, a, {}), e.repeatPrintInfo[a][i] || n["default"].set(e.repeatPrintInfo[a], i, {}), n["default"].set(e.repeatPrintInfo[a][i], c, t.data)
            })), Object(Ct["a"])(Lt, Dt, (function (e, t) {
                var a = t.fid ? t.fid : 0,
                    i = t.tid ? t.tid : 0,
                    c = t.trid ? t.trid : 0;
                if (!e.repeatPrintInfo[a] || !e.repeatPrintInfo[a][i]) return !1;
                n["default"].delete(e.repeatPrintInfo[a][i], c)
            })), Object(Ct["a"])(Lt, At, (function (e, t) {
                e.primaryUid = t.uid
            })), Object(Ct["a"])(Lt, Ot, (function (e, t) {
                e.starterDepartId = t.starterDepartId
            })), Object(Ct["a"])(Lt, Et, (function (e, t) {
                e.isPrintMake = t.isPrintMake
            })), Object(Ct["a"])(Lt, Mt, (function (e, t) {
                var a = t.fid ? t.fid : "0";
                n["default"].set(e.tablePageInfo, a, t.data)
            })), Object(Ct["a"])(Lt, Rt, (function (e, t) {
                var a = t.fid ? t.fid : "0";
                n["default"].set(e.printStyle, a, t.data)
            })), Object(Ct["a"])(Lt, Ut, (function (e, t) {
                var a = t.fid ? t.fid : "0";
                n["default"].set(e.formLoaded, a, t.status)
            })), Object(Ct["a"])(Lt, Bt, (function (e, t) {
                e.warningErrors.push(t)
            })), Object(Ct["a"])(Lt, Ft, (function (e, t) {
                e.warningErrors = []
            })), Object(Ct["a"])(Lt, Ht, (function (e, t) {
                e.childTable = t
            })), Object(Ct["a"])(Lt, Kt, (function (e, t) {
                n["default"].set(e.childDataSource, t.fid, t.params)
            })), Object(Ct["a"])(Lt, $t, (function (e, t) {
                n["default"].set(e.childNoCanSource, t.fid, t.ids)
            })), Object(Ct["a"])(Lt, qt, (function (e, t) {
                n["default"].set(e.childNoCanSourceKeys, t.fid, t.keys)
            })), Object(Ct["a"])(Lt, Wt, (function (e, t) {
                e.repeatOperationAlert = t
            })), Object(Ct["a"])(Lt, Jt, (function (e, t) {
                var a = {};
                for (var n in e.selectData) a[n] = t[n] ? t[n] : e.selectData[n];
                e.selectData = a
            })), Object(Ct["a"])(Lt, Gt, (function (e, t) {
                n["default"].set(e.refreshRTable, t.fid, t.params)
            })), Object(Ct["a"])(Lt, zt, (function (e, t) {
                n["default"].set(e.formStatus, t.fid, t)
            })), Object(Ct["a"])(Lt, Vt, (function (e, t) {
                n["default"].set(e.refreshDataSource, t.fid, t.params)
            })), Object(Ct["a"])(Lt, Yt, (function (e, t) {
                var a = {};
                a[t.key] = t.params, n["default"].set(e.retableIds, t.fid, a)
            })), Object(Ct["a"])(Lt, Xt, (function (e, t) {
                var a = {};
                a[t.key] = t.data, n["default"].set(e.setSortInfo, t.fid, a)
            })), Lt),
            Zt = (a("b130"), a("9302"), a("90aa"), {
                toReduceStartLoading: function (e) {
                    setTimeout((function () {
                        e.state.matterLoading > 0 && e.commit("REDUCE_STARTLOADING")
                    }), 300)
                },
                initFormStatus: function (e, t) {
                    var a = {
                        fid: t.fid,
                        status: 1,
                        initSourceList: [],
                        usedSourceList: []
                    };
                    for (var n in t.plugins) {
                        var i = t.plugins[n];
                        1 == i.classtype && "dDataSource" == i.type && (i.attr.data.runStatus.includes(1) && a.initSourceList.push(i.key))
                    }
                    a.status = a.initSourceList.length ? 1 : 2, e.commit("SET_FORMSTATUS", a)
                },
                formSourceRun: function (e, t) {
                    var a = e.state.formStatus[t.fid];
                    if (!a.initSourceList.includes(t.sourceKey) || 2 == a.status) return !1;
                    a.usedSourceList.includes(t.sourceKey) || a.usedSourceList.push(t.sourceKey), a.usedSourceList.sort().join("_") == a.initSourceList.sort().join("_") && (a.status = 2), e.commit("SET_FORMSTATUS", a)
                },
                onlySetFormStatus: function (e, t) {
                    var a = e.state.formStatus[t.fid];
                    a.status = t.status, e.commit("SET_FORMSTATUS", a)
                }
            }),
            ea = {
                namespaced: !0,
                state: function () {
                    return {
                        allplugin: {},
                        matterLoading: 0,
                        isPrintMake: !1,
                        repeatPrintInfo: {},
                        tablePageInfo: {},
                        printStyle: {},
                        formLoaded: {},
                        warningErrors: [],
                        childTable: {},
                        childDataSource: {},
                        childNoCanSource: {},
                        childNoCanSourceKeys: {},
                        repeatOperationAlert: {},
                        selectData: {
                            tableid: "",
                            start: {
                                id: "",
                                row: 0,
                                col: 0
                            },
                            end: {
                                id: "",
                                row: 0,
                                col: 0
                            },
                            selectIds: []
                        },
                        refreshRTable: {},
                        formStatus: {},
                        refreshDataSource: {},
                        retableIds: {},
                        setSortInfo: {}
                    }
                },
                mutations: Qt,
                actions: Zt
            },
            ta = "UPDATA_SAVEDATA",
            aa = "UPDATE_NODEID",
            na = "UPDATE_FORMS",
            ia = "UPDATE_EVARLIST",
            ca = "UPDATE_FORMSHELPER",
            oa = "UPDATE_EVARLISTHELPER",
            sa = (St = {}, Object(Ct["a"])(St, ta, (function (e, t) {
                e.saveData = t
            })), Object(Ct["a"])(St, aa, (function (e, t) {
                e.currNodeId = t
            })), Object(Ct["a"])(St, na, (function (e, t) {
                e.forms = t
            })), Object(Ct["a"])(St, ia, (function (e, t) {
                e.evarList = t
            })), Object(Ct["a"])(St, ca, (function (e, t) {
                e.formsHelper = t
            })), Object(Ct["a"])(St, oa, (function (e, t) {
                e.evarHelper = t
            })), St),
            ra = {
                namespaced: !0,
                state: function () {
                    return {
                        saveData: {},
                        forms: {},
                        currNodeId: "",
                        evarList: [],
                        formsHelper: [],
                        evarHelper: []
                    }
                },
                mutations: sa
            },
            ua = {
                SET_NODEDATAS: function (e, t) {
                    e.nodeDatas = t
                },
                SET_SELECTUIDS: function (e, t) {
                    e.selectNodeUid = t
                },
                SET_SMSSEND: function (e, t) {
                    e.sms_send = t
                },
                My_TAST: function (e, t) {
                    e.task = t
                },
                My_SPONSOR: function (e, t) {
                    e.sponsor = t
                },
                SET_AGENT_INFO: function (e, t) {
                    e.agent_info = t
                },
                CLEAR_AGENT_INFO: function (e, t) {
                    e.agent_info = {}
                },
                FORM_MATTER: function (e, t) {
                    n["default"].set(e.formMatter, t.type, t.data)
                }
            },
            da = {
                clearUserSelectInfo: function (e) {
                    e.commit("SET_NODEDATAS", []), e.commit("SET_SELECTUIDS", {}), e.commit("SET_SMSSEND", 0)
                }
            },
            la = {
                namespaced: !0,
                state: function () {
                    return {
                        nodeDatas: [],
                        selectNodeUid: {},
                        sms_send: {},
                        sponsor: "",
                        task: "",
                        agent_info: {},
                        formMatter: {
                            startWait: ""
                        }
                    }
                },
                mutations: ua,
                actions: da
            },
            fa = "UPDATA_GRANTMELISTS",
            ha = "UPDATE_SHOWDATACENTER",
            pa = (wt = {}, Object(Ct["a"])(wt, fa, (function (e, t) {
                e.grantMeLists = t
            })), Object(Ct["a"])(wt, ha, (function (e, t) {
                e.showDataCenter = t
            })), wt),
            ma = {
                namespaced: !0,
                state: function () {
                    return {
                        grantMeLists: null,
                        showDataCenter: null
                    }
                },
                mutations: pa
            };
        n["default"].use(It["a"]);
        var ba = new It["a"].Store({
            modules: {
                form: ea,
                process: ra,
                matter: la,
                common: ma
            }
        });
        var ga = ba,
            ka = (a("0d0f"), function () {
                var e = this,
                    t = e.$createElement,
                    a = e._self._c || t;
                return a("router-view")
            }),
            ya = [],
            va = a("1462"),
            La = a("a340"),
            Sa = function () {
                function e(t) {
                    Object(va["a"])(this, e), this.oDiv = document.querySelector(t), this.disX = 0, this.disY = 0, this.init()
                }
                return Object(La["a"])(e, [{
                    key: "init",
                    value: function () {
                        this.oDiv.addEventListener("touchstart", function (e) {
                            var t = e.targetTouches[0];
                            this.disX = t.clientX - this.oDiv.offsetLeft, this.disY = t.clientY - this.oDiv.offsetTop, this.oDiv.addEventListener("touchmove", this.Fntouchmove.bind(this)), this.oDiv.addEventListener("touchend", function (e) {
                                this.oDiv.removeEventListener("touchmove", this.Fntouchmove)
                            }.bind(this))
                        }.bind(this))
                    }
                }, {
                    key: "Fntouchmove",
                    value: function (e) {
                        e.preventDefault();
                        var t = e.targetTouches[0],
                            a = t.clientX - this.disX,
                            n = t.clientY - this.disY,
                            i = $(window).width() - $(this.oDiv).outerHeight(!0),
                            c = $(window).height() - $(this.oDiv).outerHeight(!0);
                        a > 0 && a < i && (this.oDiv.style.left = a + "px"), n > 0 && n < c && (this.oDiv.style.top = n + "px")
                    }
                }]), e
            }(),
            wa = function () {
                function e(t) {
                    Object(va["a"])(this, e), this.ua = navigator.userAgent, this.isAndroid = -1 !== this.ua.indexOf("Android") || -1 !== this.ua.indexOf("Adr"), this.iswx = -1 !== this.ua.toLowerCase().indexOf("micromessenger"), this.isMiniprogram = "miniprogram" === window.__wxjs_environment, this.path = "", this.showReturnBtnPaths = t
                }
                return Object(La["a"])(e, [{
                    key: "initReturnBtn",
                    value: function () {
                        this.isAndroid && this.iswx && !this.isMiniprogram && (this.removeReturnBtn(), this.showReturnBtnPaths.includes(this.path) && (window.history.length > 1 || document.referrer) && (this.createReturnBtn(), new Sa("#android_retrun_btn"), this.return()))
                    }
                }, {
                    key: "createReturnBtn",
                    value: function () {
                        if (!$("#android_retrun_btn").length) {
                            var e = $("<div>返回</div>").attr({
                                id: "android_retrun_btn"
                            });
                            e.appendTo("body")
                        }
                    }
                }, {
                    key: "removeReturnBtn",
                    value: function () {
                        $("#android_retrun_btn").remove()
                    }
                }, {
                    key: "return",
                    value: function () {
                        $("body").on("click", "#android_retrun_btn", (function () {
                            window.history.length > 1 ? window.history.go(-1) : location.href = document.referrer
                        }))
                    }
                }]), e
            }(),
            ja = function () {
                function e() {
                    Object(va["a"])(this, e)
                }
                return Object(La["a"])(e, [{
                    key: "init",
                    value: function () {
                        gt["a"].checkLogin() && this.createrEle()
                    }
                }, {
                    key: "createrEle",
                    value: function () {
                        this.removeEle();
                        var e = "";
                        document.cookie && (e = document.cookie.split("=")[1]);
                        var t = $("<img />").attr({
                            id: "visits_collect",
                            src: "".concat(appConfig.apiBaseUrl, "/api/visits/collect?agent=").concat(location.href.includes("m_") ? "mobile" : "pc", "&uid=").concat(e),
                            style: "display: none;"
                        });
                        t.appendTo("body")
                    }
                }, {
                    key: "removeEle",
                    value: function () {
                        $("#visits_collect").remove()
                    }
                }]), e
            }(),
            Ia = ja,
            Ca = {
                data: function () {
                    return {
                        showReturnBtnPaths: ["/site/m_search", "/site/m_message", "/site/m_changeInfo", "/site/m_addapp", "/matter/m_detail", "/matter/m_start", "/matter/m_startStep", "/matter/m_examine", "/matter/m_rejectStep", "/matter/m_launchSearch", "/matter/m_search", "/report/m_detail", "/report/m_search"],
                        androidReturnBtn: null,
                        visitsCollect: null
                    }
                },
                created: function () {
                    this.androidReturnBtn = new wa(this.showReturnBtnPaths), this.visitsCollect = new Ia
                },
                updated: function () {
                    this.androidReturnBtn.path = this.$route.path, this.androidReturnBtn.initReturnBtn(), this.visitsCollect.init()
                }
            },
            Pa = Ca,
            Ta = a("9ca4"),
            Na = Object(Ta["a"])(Pa, ka, ya, !1, null, null, null),
            _a = Na.exports;
        window.Vue = n["default"], window.$ = window.jQuery = f.a, window.EventSource = ot["NativeEventSource"] || ot["EventSourcePolyfill"], window.commonHelper = st["a"];
        var xa = jt.init();
        n["default"].prototype.appRouter = xa, n["default"].prototype.appStore = ga, new n["default"]({
            router: xa,
            store: ga,
            i18n: ct,
            render: function (e) {
                return e(_a)
            }
        }).$mount("#app")
    },
    6128: function (e, t, a) {
        "use strict";
        a.d(t, "a", (function () {
            return d
        }));
        a("ecb4"), a("e18c"), a("e35a"), a("5e9f");
        var n = a("e793"),
            i = a("c0a4"),
            c = a("82ae"),
            o = a.n(c),
            s = a("1d8b"),
            r = a("fed1"),
            u = function (e, t) {
                try {
                    e = e.replace(appConfig.apiBaseUrl, ""), i["default"].prototype.appCommonH.postTimeLine(1, {
                        api: e.replace(appConfig.apiBaseUrl, ""),
                        useTime: (new Date).getTime() - t
                    })
                } catch (a) {}
            },
            d = function (e, t, a) {
                var c = e.url;
                if (void 0 === e) return console.error("必须传递参数"), !1;
                e.url.toLocaleLowerCase().indexOf("http") < 0 && (e.url = s["a"].getApi(e.url)), e.withCredentials = !0;
                var d = {
                    "Content-Type": "application/x-www-form-urlencoded"
                }; - 1 === window.location.href.indexOf("local.") && (d["X-Requested-With"] = "XMLHttpRequest"), e.headers ? e.headers = Object(n["a"])(Object(n["a"])({}, d), e.headers) : e.headers = d, e.data = Object(n["a"])(Object(n["a"])({}, e.data), i["default"].prototype.appCommonH.getAgentInfo(i["default"].prototype.appStore.state.matter.agent_info)), "get" == e.method.toLowerCase() && (e.params = e.data, delete e.data), e.data && (e.data = r.stringify(e.data));
                var l = (new Date).getTime();
                return new Promise((function (n, s) {
                    o()(e).then((function (a) {
                        u(e.url, l), i["default"].prototype.appCommonH.openDebug() && alert(e.url + ":" + JSON.stringify(a));
                        var c = a.data || {};
                        c.e = +c.e, 10042 != c.e ? 10044 == c.e ? i["default"].prototype.$message({
                            type: "error",
                            message: c.m,
                            showClose: !0
                        }) : (t && t(a.data), n(a.data)) : i["default"].prototype.authH.toLogin()
                    })).catch((function (t) {
                        u(e.url, l), console.error(t, "API " + c), a && a(t), s(t)
                    }))
                }))
            };
        i["default"].prototype.appFetch = d
    },
    6367: function (e, t, a) {
        "use strict";
        a("fe59"), a("e35a"), a("0d7a"), a("08ba");
        var n = a("e793"),
            i = a("c0a4"),
            c = a("6128"),
            o = {
                _varKey: "$EVN",
                formCallbacks: [],
                getMatterEd: !1,
                init: function () {
                    window[this._varKey] || (window[this._varKey] = {})
                },
                add: function (e, t) {
                    var a = {};
                    for (var i in e) a[t + "_" + i] = e[i];
                    this.deleteByDimension(t), window[this._varKey] = Object(n["a"])(Object(n["a"])({}, window[this._varKey]), a)
                },
                get: function (e) {
                    var t = e.split(".");
                    return t[0] !== this._varKey ? e : window[this._varKey] && window[this._varKey][t[1]] ? 3 == t.length ? window[this._varKey][t[1]][t[2]] : window[this._varKey][t[1]] : ""
                },
                delete: function (e) {
                    window[this._varKey] && window[this._varKey][e] && delete window[this._varKey][e]
                },
                deleteByDimension: function (e) {
                    for (var t in window[this._varKey]) t.split(0, 4) == e + "_" && this.delete(t)
                },
                getMatterEvn: function (e, t) {
                    var a = this;
                    this.getMatterEd ? t() : this.formCallbacks.push(t), 1 == this.formCallbacks.length && Object(c["a"])({
                        url: "getMatterEvn",
                        method: "get",
                        data: {
                            app_id: e.appId,
                            inst_id: e.instId,
                            task_id: e.taskId,
                            sess_id: e.sessId
                        }
                    }, (function (e) {
                        if (a.getMatterEd = !0, 0 == e.e) {
                            var t = {};
                            for (var n in e.d) t[e.d[n].key] = e.d[n].value;
                            a.add(t, "matter")
                        } else console.error("获取事项环境变量失败：" + e.m);
                        a.formCallbacks.forEach((function (e) {
                            e()
                        })), a.formCallbacks = []
                    }), (function () {
                        a.getMatterEd = !0, a.formCallbacks.forEach((function (e) {
                            e()
                        })), a.formCallbacks = [], console.error("获取事项环境变量失败")
                    }))
                },
                deleteAll: function () {
                    this.getMatterEd = !1, this.formCallbacks = [], window[this._varKey] = {}
                },
                deleteOtherUrl: function () {
                    var e = {};
                    for (var t in window[this._varKey]) "url" === t.split("_")[0] && (e[t] = window[this._varKey][t]);
                    this.getMatterEd = !1, this.formCallbacks = [], window[this._varKey] = e
                }
            };
        o.init(), i["default"].prototype.evnHelper = o, t["a"] = o
    },
    9403: function (e, t, a) {
        "use strict";
        var n = a("c0a4"),
            i = {
                toPdfType: function (e) {
                    var t = this.getConfig("isToPdf");
                    return t[e] ? t[e] : t["default"]
                },
                getConfig: function (e) {
                    return !(!appConfig.customConfig || !appConfig.customConfig[e]) && appConfig.customConfig[e]
                },
                getConfigId: function (e, t) {
                    var a = this.getConfig(e);
                    return a[t] ? a[t] : a["default"]
                }
            };
        n["default"].prototype.customHelper = i, t["a"] = i
    },
    a4d9: function (e, t, a) {
        var n, i = a("08a9");
        e.exports = (n = {
            webId: "bupt",
            login: "",
            logout: "/site/login/cas-logout",
            userKeyPrefix: "",
            version: "1.0",
            env: "product",
            evnWebid: "bupt",
            sourceV: 1601431911661,
            customConfig: {
                isToPdf: {
                    default: 2
                },
                oldPrintPage: {
                    margin: "30mm 20mm 20mm 20mm"
                },
                newPrintPage: {
                    margin: "30mm 20mm 20mm 20mm"
                },
                ucenterPath: {
                    default: "me.bupt.edu.cn"
                }
            }
        }, i(n, "sourceV", 1601431911661), i(n, "onlyClient", (function () {
            return !1
        })), n)
    },
    e425: function (e, t) {
        e.exports = {
            login: "/site/login/login",
            loginCode: "/site/login/code",
            logout: "/site/login/logout",
            GetOauthCode: "/open/connection/get-code",
            banners: "/api/home/get-banners",
            getNewApps: "/api/home/new-apps",
            getMessageLists: "/site/message/lists",
            addMyApps: "/site/user/add-my-apps",
            sitmessageread: "/site/message/read",
            thirdClickNum: "/site/apps/click-num",
            appSearch: "/api/home/app-search",
            printerHelpL: "/api/apps/printer-help",
            notificationdetail: "/site/notification/detail",
            notificationid: "/site/notification/type-index",
            SSDeparCount: "/site/statistics/department-count",
            SSServiceCount: "/site/statistics/service-count",
            recentappssave: "/site/apps/recent-apps-save",
            siteLastApps: "/site/apps/last-apps",
            siteAllList: "/site/apps/list",
            getAppDetail: "/api/apps/detail",
            myApps: "/site/user/my-apps",
            getProcessInfoNew: "/site/process/start-info",
            sitmessagelist: "/site/message/lists",
            sitmessagedel: "/site/message/delete",
            sealConfig: "/site/seal/seal-config",
            sealSetPwd: "/site/seal/set-seal-password",
            sealUserInfo: "/site/seal/user-info",
            sealInfo: "/site/seal/get-personal-seal",
            addSeal: "/site/seal/add-seal",
            personOfficialSealListnew: "/site/seal/my-office-seal",
            sealUpdateSeal: "/site/seal/update-seal",
            sealChangeImagenew: "/site/seal/set-personal-seal",
            signInfo: "/site/seal/sign-info",
            sealHistory: "/site/seal/seal-history",
            signChangeImage: "/site/seal/change-sign-image",
            addSign: "/site/seal/add-sign",
            getgrantlists: "/site/grant-account/lists",
            savegrantlists: "/site/grant-account/save",
            delgrantlists: "/site/grant-account/delete",
            sitesearchuser: "/site/user/search-user",
            addScientificUser: "/site/bupt/scientific-user-add",
            scientificUserList: "/site/bupt/scientific-user-list",
            scientificUserDel: "/site/bupt/scientific-user-delete",
            entrustList: "/site/agent-deal/list",
            newEntrust: "/site/agent-deal/add",
            changeEntruststate: "/site/agent-deal/change-status",
            getonceEntrust: "/site/agent-deal/get",
            deleteEntrust: "/site/agent-deal/delete",
            changeEntrust: "/site/agent-deal/edit",
            dowmloadCenter: "/site/download-centre/list",
            downloadRest: "/site/download-centre/rest-export",
            getDownloadFile: "/site/download-centre/verify-file-size",
            getAgentList: "/site/user/agent-list",
            saveAgent: "/site/user/save-agent",
            agentInfo: "/site/user/agent-info",
            changeAgentStatus: "/site/user/change-agent-status",
            delAgent: "/site/user/del-agent",
            hasAgent: "/site/user/has-agent",
            agentApp: "/site/user/agent-app",
            agentAuth: "/site/process/agent-set",
            renewuserInfo: "/site/user/infov",
            reuserssavev: "/site/user/savev",
            reinfoconfig: "/site/user/info-config",
            reusersdepartv: "/api/user/departv",
            reuserdictionary: "/api/user/dictionary",
            resiteexnotice: "/site/user/examine-notice",
            reuseridentify: "/system/user/identify",
            reusercancelidentify: "/system/user/cancel-identify",
            redelusertable: "/site/user/del-user-info",
            reuserapprover: "/system/user/approver",
            reusersimportmy: "/site/user/import-my",
            validate_pass: "/site/user/validate-password",
            repassword: "/site/user/repassword",
            update_mobile: "/site/user/update-mobile",
            validate_code: "/site/message/sms",
            myDataTags: "/site/user/my-data-tags",
            tableconfig: "/site/user/center-config",
            agreepromise: "/site/user/agree-promise",
            getJob: "/site/job/depart-job",
            allDepartment: "/api/user/departv",
            outsideLogin: "/site/login/outside-login",
            checkMoblie: "/site/login/check-mobile",
            resetPassword: "/site/login/reset-password",
            loginSendCode: "/site/login/send",
            forceResetpwd: "/site/login/force-resetpwd",
            getUserCode: "/site/tools/get-usercode",
            personalCenInfo: "/site/personal-center/info",
            personalCenEdit: "/site/personal-center/edit",
            backGetAuth: "/system/personal-center/get-auth",
            backUpdateAuth: "/system/personal-center/updata-auth ",
            siteGetFolder: "/site/apps/folder",
            personalPassword: "/site/personal-center/reset-password",
            launchAtodoC: "/site/user/launch-and-todo-count",
            schoolhealthcard: "/site/go-back-school/health-card",
            formLists: "/site/form/lists",
            toPdf: "/pdf-server/index",
            getToPdfStatus: "/pdf-server/status",
            cloneForm: "/system/form/clone",
            getBpmnFormList: "/system/bpmn/all",
            getDataByExeclPath: "/site/tools/excel-parse",
            repeatFile: "/api/upload/zip-file",
            savePrintInfo: "/site/form/save-preview",
            saveFormDraft: "/site/form/save-form-data-draft",
            codeGetForm: "/api/form/get-form",
            getFromMode: "/site/form/get-formv",
            getFormOneDetail: "/site/form/detail",
            saveFormAttr: "/system/form/save-attributes",
            updateFormModel: "/system/form/modify",
            createFormModel: "/system/form/create",
            createNewForm: "/system/form/create",
            getChildTableData: "/site/process/child-table-data",
            goodList: "/site/goods/lists",
            getMatterEvn: "/site/process/variables",
            getnoticeList: "/system/form-notice/list",
            getBindColumn: "/site/data/bind-api-list",
            getDataSourceList: "/site/data-source/all",
            getColumnMap: "/site/data-source/dictionary",
            vBpmnFormList: "/system/bpmn/list-form",
            fBpmnCom: "/system/form/get-components",
            departSeal: "/system/department/depart-seal",
            bpmnSearchForm: "/system/form/search-app",
            getRelation: "/api/user/relation",
            searchUserRelation: "/site/user/user-search-range",
            getvalidatorList: "/system/form-validator/list",
            getnoticeDetail: "/site/form-notice/detail",
            searchBindInfo: "/site/data/bind-data",
            searchCountry: "/api/country/search",
            getDataSourceData: "/site/data-source/detail",
            getUserbefore: "/site/user/search-user",
            allJob: "/site/job/all",
            allTeam: "/site/user/team",
            getPdfSeal: "/site/seal/pdf-seal",
            goodDetail: "/site/goods/detail",
            formFee: "/site/form-pay/form-fee",
            getOrder: "/site/form-pay/get-order",
            getinstIdOrder: "/site/form-pay/get-form-order",
            getProjectnumber: "/site/activiti/project-number",
            region: "/api/dictionary/province",
            roomAllList: "/site/pku-room/select-room-name",
            getRoom: "/site/pku-room/get-room-list",
            getDetailRoom: "/site/pku-room/get-room-list-by-id",
            mySeal: "/site/seal/my-office-seal",
            processSubmit: "/site/process/submit",
            searchUserPlugin: "/site/user/form-search-user",
            uploadindex: "/api/upload/index",
            checkChild: "/site/process/check-child-table",
            getOcrApi: "/system/ocr/all",
            getOcrApiDetail: "/system/ocr/detail",
            getOcrData: "/site/ocr/get-data",
            baseupload: "/api/upload/base-upload",
            fsBpmnCom: "/system/form/multi-components",
            getSystemVar: "/system/bpmn/user-variables",
            getProcessDefinition: "/system/bpmn/get-bpmn-infov",
            listTrigger: "/system/trigger/list",
            saveBpmnAttribute: "/system/bpmn/save-attributes",
            saveBpmn: "/system/bpmn/save",
            bpmnGetUser: "/system/user/simple-search",
            getSignal: "/system/activiti-signal/app-get-signal",
            tagsTag: "/system/tags/tags",
            saveTag: "/system/tags/save",
            publishTag: "/system/tags/publish",
            deleteTag: "/system/tags/delete",
            sortTag: "/system/tags/sort",
            searchTag: "/system/tags/list-app",
            getagList: "/system/tags/tag-list",
            setTagMatter: "/system/app/set-tag",
            sortTagApp: "/system/tags/sort-app",
            deleteMatterApp: "/system/tags/delete-app",
            addTagApp: "/system/tags/add-app",
            getApp: "/system/app-folder/index",
            saveApp: "/system/app-folder/save",
            publishApp: "/system/app-folder/publish",
            deleteApp: "/system/app-folder/delete",
            moveApp: "/system/app-folder/move",
            delMaterial: "/system/material-picture/delete",
            addMaterial: "/system/material-picture/save",
            saveMaterialClassify: "/system/material-classification/save",
            delMaterialClassify: "/system/material-classification/delete",
            prefixList: "/system/prefix/index",
            getIdentity: "/site/identity/index",
            getCommentConf: "/system/comment-manage/index",
            getFormMatterList: "/system/form/version-list",
            saveMatterBase: "/system/app/save-base",
            getmatterDetail: "/system/app/detail",
            appVersionList: "/system/bpmn/list",
            createAppVerion: "/system/bpmn/create-version",
            bpmnSaveForm: "/system/bpmn/save-form",
            bpmnAppDetail: "/system/bpmn/detail",
            bpmnClone: "/system/bpmn/clone",
            publishBpmn: "/system/bpmn/publish",
            bpmnSaveTask: "/system/bpmn/save-task",
            getTriggerList: "/system/trigger/app-get-trigger",
            moveTag: "/system/app/set-tag",
            publishMatter: "/system/app/publish",
            unpublishMatter: "/system/app/unpublish",
            getEventSource: "/system/bpmn/source-key",
            getFormAuth: "/system/form/get-form-auth",
            enableForm: "/system/form/enable-version",
            saveSelectForms: "/system/form/save-select",
            setFormAuth: "/system/form/save-form-auth",
            getFormTip: "/system/form/get-form-tip",
            upsataFormTip: "/system/form/update-form-tip",
            formSaveHide: "/system/form/save-hide",
            formSaveNote: "/system/form/save-note",
            bpmnSaveeHide: "/system/bpmn/save-hide",
            bpmnSaveNote: "/system/bpmn/save-note",
            appHide: "/system/app/hide",
            newGetArchive: "/site/archive/query",
            newArchiveFormCom: "/site/archive/form-components",
            newdelArchive: "/site/archive/delete-archive",
            recentExportRecord: "/site/archive/recent-export-record",
            pollingStatus: "/site/archive/polling-state",
            exportToExcel: "/site/archive/query-to-excel",
            exportToAttach: "/site/archive/attach-export",
            tongjiArchive: "/site/archive/tongji",
            getCommentsList: "/system/comments/lists",
            myStarted: "/site/process/inst-list",
            getMyTodo: "/site/process/my-todo",
            getMyRead: "/site/process/my-read",
            getMyOversee: "/site/process/my-oversee",
            mGetMyTodo: "/site/process/my-todov",
            mGetMyRead: "/site/process/my-readv",
            mGetMyOversee: "/site/process/my-overseev",
            getProcessLog: "/site/process/log",
            getThirdpartyLog: "/site/process/thirdparty-log",
            getCommentCon: "/site/comments/config",
            subComment: "/site/comments/comment",
            getBatchNodes: "/site/process/batchable-nodes",
            getMyBatchList: "/site/process/my-batch",
            toBatchByTaskIds: "/site/process/batch",
            toBatchByNodeId: "/site/process/batch-by-node",
            getBatchProgress: "/site/process/get-batch-progress",
            pkuDelDraft: "/site/form/del-apps-form",
            revokeTodo: "/site/process/revoke",
            getUserMyDepar: "/site/user/my-depart",
            gitstartInfo: "/site/form/start-data",
            postFormFirstData: "/site/apps/launch",
            getDataByAppId: "/api/form/get-data",
            startSaveDraft: "/site/form/save-form-data-draft-apps",
            sealCheckCode: "/site/seal/seal-check-code",
            searchAgentUser: "/site/user/search-agent-user",
            dealInfo: "/site/process/deal-info",
            getformchange: "/site/form/change-log",
            dealData: "/site/form/deal-data",
            getShortcutList: "/site/shortcut/list",
            addShortcut: "/site/shortcut/add",
            deleteShortcut: "/site/shortcut/delete",
            postFormData: "/site/form/save",
            uploadAuth: "/site/attach/auth-upload",
            downloadAuth: "/site/attach/auth-download",
            saveFormAndTask: "/site/task/deal",
            changeApprover: "/site/process/change-approver",
            matterArchiveEdit: "/site/archive/edit",
            getstartdata: "/api/form/get-start-data",
            getTaskAuth: "/api/form/get-task-data",
            downPdf: "/pdf-server/down",
            getDataBySessId: "/api/form/get-session-data",
            getDataByInstId: "/api/form/get-inst-data",
            revokeMatter: "/site/activiti/revoke",
            myReminder: "/site/process/reminder",
            leaveCountrySave2: "/site/pku-seal/reject-update",
            taskaddsign: "/site/task/add-sign",
            batchRecord: "/site/process/batch-record",
            restBatch: "/site/process/rest-batch",
            delBatch: "/site/process/del-batch",
            getYears: "/site/process/system-up-year",
            getAppNames: "/site/process/get-app-names",
            getRecordNode: "/site/process/get-record-node",
            saveBaseReport: "/system/apps-report/save-base",
            reportFormList: "/system/apps-report/list",
            reportPublish: "/system/apps-report/publish",
            deleteReport: "/system/apps-report/delete",
            getReportFormList: "/system/apps-report/form-list",
            getSystemFields: "/system/apps-report/get-system-fields",
            getFormconponent: "/system/apps-report/all-components",
            saveReport: "/system/apps-report/save-info",
            getAppForm: "/system/form/get-forms",
            sortList: "/system/apps-report/sort-list",
            clickSort: "/system/apps-report/sort",
            topAdNoTop: "/system/apps-report/set-top",
            getRepeatFiled: "/system/apps-report/repeat-filed",
            getReportDetail: "/site/apps-report/get",
            appsReportList: "/site/apps-report/query",
            appsReportGraph: "/site/apps-report/query-graph",
            getDepartNews: "/site/department/auth-tree",
            commonQueryList: "/site/apps-report/common-query-list",
            saveCommonQuery: "/site/apps-report/save-common-query",
            delCommonQuery: "/site/apps-report/common-query-delete",
            reportExcel: "/site/apps-report/query-excel",
            thirdpartyReportExcel: "/site/apps-report/thirdparty-query-excel",
            threeReportList: "/site/apps-report/thirdparty-query",
            threeReportGraph: "/site/apps-report/thirdparty-query-graph",
            getHotReport: "/api/home/hot-report",
            isHasEmail: "/site/tools/check-email",
            uestcReminder: "/site/uestc/one-click-reminder",
            getjustIdentity: "/site/identity/role",
            getAuthListgroup: "/system/auth-group/index",
            searchConfig: "/system/user/search-config",
            searchPeople: "/system/user/search",
            exportUsers: "/system/user/export-users",
            import: "/system/user/import",
            getStaff: "/site/user/info-config?type=staff",
            getStudent: "/site/user/info-config?type=student",
            delUsers: "/system/user/delete",
            getUserCfg: "/system/user/create-user-config",
            addUserCfg: "/system/user/add",
            addPersonalcenter: "/system/personal-center/add",
            dbList: "/system/db-config/list",
            userSearchV2: "/system/user/searchv2",
            systemExportUser: "/system/user/export-user-queue",
            importUserV2: "/system/user/importv2",
            saveSign: "/system/team/save",
            savevSign: "/system/team/savev",
            signList: "/system/team/lists",
            delSign: "/system/team/delete",
            saveStaff: "/system/team/staff-save",
            delStaff: "/system/team/staff-delete",
            addGroup: "/system/team/add-group",
            groupList: "/system/team/allv",
            groupLists: "/system/team/all",
            delGroup: "/system/team/del-group",
            departvManage: "/api/user/departv?type=manager",
            saveDepart: "/system/department/savev",
            saveJob: "/system/job/save-job-user",
            delDepart: "/system/department/deletev",
            exportDepart: "/system/department/export",
            delDepUser: "/system/job/del-job-user",
            systemJobList: "/system/job/all",
            sortJob: "/system/job/sort-all",
            addJob: "/system/job/add-job",
            delJob: "/system/job/del-job",
            deljobUser: "/system/job/del-job-user",
            getDepartJob: "/system/department/department-info",
            setDepartJob: "/system/department/set-depart-job",
            importJobUser: "/system/job/import-jobs",
            getJobUserList: "/system/job/job-user-list",
            updateJob: "/system/department/update-depart-job",
            infoAuofficialList: "/system/seal/official-seal-list",
            addOfficial: "/system/seal/add-official-seal",
            delOfficial: "/system/seal/del-official-seal",
            addofficialUser: "/system/seal/add-official-seal-user",
            delofficialUser: "/system/seal/del-official-seal-user",
            sealhistoryUser: "/system/seal/seal-history-user",
            sealhistory: "/system/seal/seal-history",
            officialsealUsers: "/system/seal/official-seal-users",
            exportsealHistory: "/system/seal/export-seal-history",
            signatureRecord: "/system/seal/personal-seal-record",
            recordExpord: "/system/seal/personal-seal-record-export",
            importtaguser: "/system/user/import-tag-user",
            downtaguser: "/system/user/down-tag-user",
            appslist: "/system/apps-type/list",
            appsreleas: "/system/apps-type/release",
            appsdelete: "/system/apps-type/delete",
            notifysave: "/system/notify/save",
            notifylist: "/system/notify/list",
            notifydetail: "/system/notify/detail",
            appsdetail: "/system/apps-type/detail",
            notifydelete: "/system/notify/delete",
            getServiceCount: "/system/statistics/service-count",
            getDepartCount: "/system/statistics/department-count",
            noticeSave: "/system/notification/save",
            deletenotice: "/system/notification/delete",
            noticeDetail: "/system/notification/detail",
            noticeList: "/system/notification/index",
            publishNotice: "/system/notification/publish",
            application: "/system/department/auth-tree?auth=application",
            classifyList: "/system/notification-type/all",
            classifySave: "/system/notification-type/add-group",
            classifyDel: "/system/notification-type/del-group",
            appssave: "/system/apps-type/save",
            appssort: "/system/apps-type/sort",
            siteconfigSave: "/system/site-options/save",
            carouselList: "/system/banner/list",
            carouselSave: "/system/banner/save",
            gethotList: "/system/app-special/get-hot-list",
            savehotApp: "/system/app-special/save-hot-app",
            getdefaultApp: "/system/default-app/index",
            deldefaultApp: "/system/default-app/delete",
            savedefaultApp: "/system/default-app/save",
            getComment: "/system/comment-manage/index",
            saveComment: "/system/comment-manage/save",
            getNoticeIndex: "/system/notice/index",
            saveNotice: "/system/notice/save",
            savesensitiveWord: "/system/sensitive/set-words",
            getWord: "/system/sensitive/get-words",
            savewechat: "/system/wechat-config/save",
            getwechat: "/system/wechat-config/info",
            thirdpartyList: "/system/thirdparty/index",
            addthirdParty: "/system/thirdparty/add",
            editthirdParty: "/system/thirdparty/edit",
            delthirdParty: "/system/thirdparty/delete",
            setStatus: "/system/thirdparty/set-status",
            getAuthList: "/system/system-auth-group/all-group",
            getAuthTree: "/system/auth-group/tree",
            getAuthPerson: "/system/system-auth-user/list",
            addAuthGrouTree: "/system/auth-group/add",
            renameAuthGrouTree: "/system/auth-group/rename",
            getAuthByPerson: "/system/user-auths/info-auth",
            deleteAuthGrouTree: "/system/auth-group/delete",
            getTagall: "/system/attribute-tag/all",
            setAuthGrouTree: "/system/auth-group/set",
            addAuthPerson: "/system/user-auth/save",
            addAuthGrou: "/system/system-auth-group/save",
            deleteAuthGrou: "/system/system-auth-group/del",
            addAdmin: "/system/system-auth-user/save",
            deleteadmin: "/system/system-auth-user/del-manage",
            delAuthAdmin: "/system/system-auth-user/del-user",
            jobSearch: "/system/user/user-job-search",
            getIndexService: "/system/statistics/index-service",
            getProfile: "/system/statistics/index-profile",
            getStatistics: "/system/statistics/index",
            getDepartDetail: "/system/statistics/department-detail",
            getErrorLog: "/system/statistics/errors",
            getServiceDetail: "/system/statistics/service-detail",
            getLoginConfig: "/api/login-config/get",
            setLoginConfig: "/system/login-config/set",
            systemFileList: "/system/file-export/get-list",
            systemAddExport: "/system/file-export/add-export-msg",
            systemUpdata: "/system/file-export/update-export-msg",
            systemDetail: "/system/file-export/delete",
            actionloglist: "/system/action-log/list",
            actionlogdetail: "/system/action-log/detail",
            saveMiniprogramConfig: "/system/miniprogram-config/save",
            getMiniprogramConfig: "/system/miniprogram-config/info",
            searchUser: "/system/user/search-user",
            searchJobUser: "/system/user/user-job-search",
            authOrize: "/system/system-auth-authorize/save",
            authOrizeList: "/system/system-auth-authorize/list",
            objectOption: "/system/system-auth-authorize/object-option",
            delAccredit: "/system/system-auth-authorize/del",
            accreditDet: "/system/system-auth-authorize/detail",
            jobAll: "/system/job/all",
            dataList: "/system/data-source/list",
            dataSave: "/system/data-source/save",
            dataDel: "/system/data-source/delete",
            dbSave: "/system/db-config/save",
            dbDel: "/system/db-config/delete",
            dbConnect: "/system/db-config/connect",
            noticeFList: "/system/form-notice/index",
            noticeFSave: "/system/form-notice/save",
            noticeFDel: "/system/form-notice/delete",
            validatorList: "/system/form-validator/index",
            validatorSave: "/system/form-validator/save",
            validatorDel: "/system/form-validator/delete",
            wsList: "/system/form-rule/list",
            widgetSave: "/system/form-rule/save",
            widgetDel: "/system/form-rule/delete",
            prefixSave: "/system/prefix/save",
            prefixDel: "/system/prefix/delete",
            addTrigger: "/system/trigger/add",
            editTrigger: "/system/trigger/edit",
            deleteTrigger: "/system/trigger/delete",
            systemAppAll: "/system/app/all",
            enableTrigger: "/system/trigger/enable",
            disableTrigger: "/system/trigger/disable",
            getOcrList: "/system/ocr/list",
            crontablist: "/system/crontab/list",
            crontabedit: "/system/crontab/edit",
            crontabinfo: "/system/crontab/info",
            crontabstop: "/system/crontab/stop",
            crontabdel: "/system/crontab/del",
            crontabhistory: "/system/crontab/history",
            signalList: "/system/activiti-signal/list",
            addSignal: "/system/activiti-signal/add",
            editSignal: "/system/activiti-signal/edit",
            deleteSignal: "/system/activiti-signal/delete",
            enableSignal: "/system/activiti-signal/enable",
            disableSignal: "/system/activiti-signal/disable",
            getuserConfig: "/system/user-auths/user-config",
            saveuserConfig: "/system/user-auths/save-user-config",
            examineList: "/system/examine/index",
            examhisList: "/system/examine/history",
            dealTask: "/system/examine/task-deal",
            getTaskList: "/system/examine/task-list",
            infoAuth: "/system/user-auths/info-auth",
            infoList: "/system/infomation/info",
            infoImport: "/system/infomation/import",
            infoImportResult: "/system/infomation/import-result",
            infoExport: "/system/infomation/export",
            infoExportResult: "/system/infomation/export-result",
            getDepart: "/api/user/departv?type=manager",
            getSite1: "/site/get_config",
            getDepartNew: "/system/department/auth-tree",
            getUser: "/system/user/search-user",
            datacenter: "/system/department/auth-tree?auth=datacenter",
            getMatter: "/system/app/search",
            sysappsdepart: "/system/app/search",
            messageCount: "/site/message/count",
            getMaterialClassify: "/system/material-classification/index",
            getMaterial: "/system/material-picture/index",
            visitsList: "/api/visits/list",
            getGrantMeLists: "/site/grant-account/grant-me",
            appsReport: "/site/apps-report/lists",
            allGrade: "/api/user/grade",
            newGetSetting: "/site/notice/personal-setting",
            subNotice: "/site/notice/save",
            sealCheckPwd: "/site/seal/seal-check-password",
            sealCheckModile: "/site/seal/seal-check-mobile",
            sealCheckToken: "/site/seal/get-sweep-code-token",
            setSealCheck: "/site/seal/set-seal-not-validate",
            getIdentitys: "/site/user/get-identitys",
            setIdentity: "/site/user/set-identity",
            setUnbind: "/site/user/unbind-wechat",
            changeUserLogin: "/site/grant-account/change-login-user",
            systemTree: "/system/department/system-auth-tree"
        }
    },
    e644: function (e, t, a) {
        "use strict";
        a("b4fb"), a("b130"), a("ecb4"), a("053b"), a("90aa");
        var n = a("c0a4"),
            i = a("e8d2"),
            c = a("5557"),
            o = a("1d8b"),
            s = {
                authKey: "authControl_key",
                usernameKey: "username_key",
                validationKey: "validation_key",
                siteConfigKey: "getSiteConfig",
                checkLogin: function () {
                    return !!this.getCookieUid()
                },
                getCookieUid: function () {
                    return i["a"].getCookie(i["a"].getUidKey())
                },
                getUserInfo: function () {
                    var e = c["a"].getSItem(this.usernameKey);
                    return e || null
                },
                toLogin: function () {
                    if (i["a"].openDebug() && alert(document.cookie), "miniprogram" === window.__wxjs_environment && c["a"].getLItem("miniprogramBind")) wx.miniProgram.navigateBack();
                    else {
                        var e = o["a"].getApi("frameToLogin") + "?redirect_url=" + i["a"].getCurrUrl(),
                            t = i["a"].query("token"),
                            a = i["a"].query("ticket");
                        null != t ? e = e + "&token=" + t : null != a && (e = e + "&ticket=" + a), i["a"].postTimeLine(4), window.location.href = e
                    }
                },
                setSiteConfig: function (e) {
                    var t = this;
                    if (c["a"].getSItem(this.siteConfigKey)) return n["default"].prototype.siteConfig = c["a"].getSItem(this.siteConfigKey), this.setWebFacicon(n["default"].prototype.siteConfig), this.getControl(e), !0;
                    i["a"].appFetch({
                        method: "get",
                        url: "getSiteConfig",
                        data: {
                            v: (new Date).getTime()
                        }
                    }, (function (a) {
                        0 == a.e ? (c["a"].setSItem(t.siteConfigKey, a.d), n["default"].prototype.siteConfig = a.d, t.setWebFacicon(a.d), t.getControl(e)) : n["default"].prototype.$message.error({
                            message: "获取网站基础信息失败，请刷新页面重试",
                            showClose: !0
                        })
                    }), (function () {
                        n["default"].prototype.$message.error({
                            message: "获取网站基础信息失败，请刷新页面重试",
                            showClose: !0
                        })
                    }))
                },
                setWebFacicon: function (e) {
                    if (e.favicon_logo) {
                        var t = document.createElement("link");
                        t.rel = "shortcut icon", t.href = e.imghost + "/" + e.favicon_logo, document.head.appendChild(t)
                    }
                },
                getControl: function (e) {
                    var t = this;
                    if (!this.checkLogin()) return c["a"].getSItem(this.authKey) && this.delControl(), e(), !1;
                    var a = this.getUserInfo();
                    a && a.uid == this.getCookieUid() && c["a"].getSItem(this.authKey) ? e && e() : n["default"].prototype.appFetch({
                        method: "get",
                        url: "getAllAuth"
                    }, (function (a) {
                        0 == a.e ? (t.getUserInfoByApi(e), c["a"].setSItem(t.authKey, 0 == a.e ? a.d : {})) : n["default"].prototype.$message.error({
                            message: "获取用户权限失败，请刷新页面重试",
                            showClose: !0
                        })
                    }), (function () {
                        n["default"].prototype.$message.error({
                            message: "获取用户权限失败，请刷新页面重试",
                            showClose: !0
                        })
                    }))
                },
                getUserInfoByApi: function (e) {
                    var t = this;
                    n["default"].prototype.appFetch({
                        method: "get",
                        url: "getUserName"
                    }, (function (a) {
                        0 == a.e ? (c["a"].setSItem(t.usernameKey, {
                            name: a.d.name,
                            uid: a.d.uid,
                            college: a.d.college,
                            sex: a.d.sex,
                            avatar: a.d.avatar,
                            administrative_level: a.d.administrative_level
                        }), e && e()) : n["default"].prototype.$message.error({
                            message: "获取用户信息失败，请刷新页面重试",
                            showClose: !0
                        })
                    }), (function () {
                        n["default"].prototype.$message.error({
                            message: "获取用户信息失败，请刷新页面重试",
                            showClose: !0
                        })
                    }))
                },
                loginOut: function (e) {
                    var t = this;
                    i["a"].appFetch({
                        method: "get",
                        url: "logout"
                    }, (function (a) {
                        if (0 == a.e)
                            if (t.delControl(), e) window.location.href = appConfig.baseUrl + "printer/login?casLogout=1";
                            else if (appConfig.logout) {
                            var i = "".concat(appConfig.logout, "?redirect_url=").concat(window.location.href);
                            window.location.href = i
                        } else window.location.href = appConfig.baseUrl + "site/login";
                        else n["default"].prototype.$message.error({
                            message: "退出登陆失败，请点击重试",
                            showClose: !0
                        })
                    }), (function () {
                        n["default"].prototype.$message.error({
                            message: "退出登陆失败，请点击重试",
                            showClose: !0
                        })
                    }))
                },
                delControl: function () {
                    c["a"].removeSItem(this.authKey), c["a"].removeSItem(this.usernameKey)
                },
                queryControl: function (e) {
                    var t = c["a"].getSItem(this.authKey);
                    return !(null == t || !t.permits) && (t.issuper || t.permits.includes(e))
                },
                isAdmin: function () {
                    var e = c["a"].getSItem(this.authKey);
                    return null != e && (e.issuper || !!e.permits.length)
                },
                isSuper: function () {
                    var e = c["a"].getSItem(this.authKey);
                    return null != e && e.issuper
                },
                Screening: function (e, t) {
                    for (var a in t)
                        for (var n in t[a]) - 1 == n.indexOf("User_") && -1 == n.indexOf("Sync") && -1 == n.indexOf("Quote") || e[a] && t[a] && t[a][n] == e[a][n] && delete e[a][n];
                    return e
                }
            };
        n["default"].prototype.authH || (n["default"].prototype.authH = s), t["a"] = s
    },
    e8d2: function (e, t, a) {
        "use strict";
        a("dbb3"), a("fe59"), a("b130"), a("ecb4"), a("9302"), a("2eeb"), a("77ad"), a("ea69"), a("053b"), a("513c"), a("fe8a"), a("e18c"), a("84c2"), a("e35a"), a("1c2e"), a("90aa"), a("f4e3"), a("5e9f"), a("9cf3"), a("0d7a"), a("08ba");
        var n = a("e793"),
            i = a("f7f9"),
            c = a("5748"),
            o = a("c0a4"),
            s = a("6128"),
            r = a("1d8b"),
            u = a("9403"),
            d = {};
        o["default"].filter("Urlfilter", (function (e) {
            if ("" != e) return -1 != e.indexOf("http") ? e : o["default"].prototype.siteConfig.imghost + e
        })), d.postTimeLine = function (e, t) {
            if (!localStorage.getItem("openPostTimeLine")) return !1;
            var a = "postTimeLine",
                n = localStorage.getItem(a);
            t = t || {}, t.nowTime = (new Date).getTime(), t.api = t.api ? t.api : "", t.useTime = t.useTime ? t.useTime : 0;
            var i = new FormData;
            i.append("type", e), i.append("uid", n), i.append("data", JSON.stringify(t));
            var c = new XMLHttpRequest;
            c.open("post", location.protocol + "//" + location.hostname + "/api/debug/log"), c.send(i)
        }, d.openDebug = function () {
            return -1 !== window.location.href.indexOf("debug=1")
        }, d.debounce = function (e, t, a) {
            if ("function" !== typeof t) throw new TypeError("need a function");
            var n = "debounce_" + e;
            window[n] && clearTimeout(window[n]), window[n] = setTimeout((function () {
                t()
            }), a)
        }, d.getAgentParams = function (e) {
            return e.agent_uid ? {
                agent_uid: e.agent_uid ? e.agent_uid : 0,
                agent_department_id: e.agent_department_id ? e.agent_department_id : 0,
                agent_name: e.agent_name ? e.agent_name : ""
            } : {}
        }, d.getAgentInfo = function (e) {
            return e.id ? {
                agent_uid: e.id ? e.id : 0,
                agent_department_id: e.depart_id ? e.depart_id : 0
            } : {}
        }, d.templateAnalysis = function (e) {
            if (!e.length) return "";
            var t = [],
                a = {
                    formData: [],
                    varData: []
                };
            return e.split("{").forEach((function (e) {
                return t.push.apply(t, Object(c["a"])(e.split("}")))
            })), t.forEach((function (e, t) {
                t % 2 == 1 && (0 == e.indexOf("form") ? a.formData.push(e) : 0 != e.indexOf("user") && 0 != e.indexOf("app") || a.varData.push(e))
            })), a.formData.forEach((function (e) {
                var a = e.split("form")[1].slice(0, e.split("form")[1].indexOf("_")),
                    n = e.split("form")[1].slice(e.split("form")[1].indexOf("_") + 1),
                    i = "";
                if (window["tablevm".concat(a)] && window["tablevm".concat(a)].plugin.plugins[n]) {
                    var c = window["tablevm".concat(a)].plugin.plugins[n];
                    switch (c.type) {
                        case "dRegion":
                            i = c.data.address;
                            break;
                        case "dCalendar":
                            var o = new Date(c.data),
                                s = o.getFullYear() + "年",
                                r = (o.getMonth() + 1 < 10 ? "0" + (o.getMonth() + 1) : o.getMonth() + 1) + "月",
                                u = (o.getDate() < 10 ? "0" + o.getDate() : o.getDate()) + "日";
                            i = s + r + u;
                            break;
                        case "dOpinion":
                            i = c.attr.data.options.filter((function (e) {
                                return e.value == c.data.option
                            }))[0].name;
                            break;
                        default:
                            i = c.data instanceof Object && c.data.name ? c.data.name : c.data instanceof Array && c.data[0] && c.data[0].name ? c.data.map((function (e) {
                                return e.name
                            })).join("、") : c.data
                    }
                }
                t.splice(t.indexOf(e), 1, i)
            })), a.varData.forEach((function (e) {
                t.splice(t.indexOf(e), 1, window.$EVN["matter_".concat(e)] || "")
            })), t.join("")
        }, d.getUrlStr = function (e, t) {
            for (var a in e += "?", t) t[a] && (e += a + "=" + t[a] + "&");
            return e.slice(0, -1)
        }, d.getUidKey = function () {
            return appConfig.userKeyPrefix ? appConfig.userKeyPrefix + "_" + appConfig.uidKey : appConfig.uidKey
        }, d.isEmptyObj = function (e) {
            return !e || !Object.keys(e).length
        }, d.appDetail = function (e, t) {
            if (e.details_page) this.appFetch({
                method: "get",
                url: "getProcessInfoNew",
                data: {
                    app_id: e.id
                }
            }, (function (a) {
                if (0 == a.e) {
                    if (a.d.nodes)
                        if (a.d.nodes.filter((function (e) {
                                return "StartEvent" == e.node_type && !e.node_parent_id
                            }))[0].steps) n = window.location.origin + (t ? "/v2/matter/m_startStep?id=" : "/v2/matter/startStep?id=") + e.id;
                        else n = window.location.origin + (t ? "/v2/matter/m_start?id=" : "/v2/matter/start?id=") + e.id;
                    else var n = window.location.origin + (t ? "/v2/matter/m_start?id=" : "/v2/matter/start?id=") + e.id;
                    "pku" == d.getWebId() && (n += "y" == sessionStorage.getItem("pku_hiddenHeader") ? "&hiddenHeader=y" : ""), d.isWeixin().isPhone ? location.href = n : window.open(n, "_blank")
                } else self.$message({
                    message: a.m,
                    type: "error"
                })
            }), (function () {
                self.loading = !1
            }));
            else {
                var a = window.location.origin + (t ? "/v2/matter/m_detail?id=" : "/v2/matter/detail?id=") + e.id;
                "pku" == d.getWebId() && (a += "y" == sessionStorage.getItem("pku_hiddenHeader") ? "&hiddenHeader=y" : ""), d.isWeixin().isPhone ? location.href = a : window.open(a, "_blank")
            }
        }, d.firstUppercase = function (e) {
            return !!e && (e = e.toString(), e.substr(0, 1).toUpperCase() + e.substr(1))
        }, d.copyObj = function (e) {
            return JSON.parse(JSON.stringify(e))
        }, d.copyObjFor = function (e) {
            function t(e) {
                if ("object" != Object(i["a"])(e)) return e;
                var a = {};
                if (Array.isArray(e) ? a = [] : null === e && (a = null), null !== a)
                    for (var n in e) a[n] = t(e[n]);
                return a
            }
            return t(e)
        }, d.getStyle = function (e, t) {
            e = this.copyObj(e);
            for (var a in e = Object(n["a"])(Object(n["a"])({}, e), t), e) NaN !== Number(e[a]) && isFinite(e[a]) && (e[a] = e[a] + "px");
            return e
        }, d.fireEvent = function (e, t) {
            if (document.createEventObject) {
                var a = document.createEventObject();
                return e.fireEvent("on" + t, a)
            }
            a = document.createEvent("HTMLEvents");
            return a.initEvent(t, !0, !0), !e.dispatchEvent(a)
        }, d.isWeixin = function () {
            var e = navigator.userAgent,
                t = e.indexOf("PKUiOS") > -1,
                a = e.indexOf("PKUAndroid") > -1,
                n = e.indexOf("Android") > -1 || e.indexOf("Adr") > -1 || a,
                i = !!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) || t,
                c = n || i;
            e = e.toLowerCase();
            var o = "micromessenger" == e.match(/MicroMessenger/i) || "_sq_" == e.match(/_SQ_/i);
            return {
                isWeixin: o,
                isPhone: c,
                isAndroid: n
            }
        }, d.getCurrUrl = function () {
            var e = window.location.href,
                t = ["<", ">", ",", "$", "\\(", "\\)"];
            return t.forEach((function (t) {
                e = e.replace(t, "")
            })), encodeURIComponent(e)
        }, d.getCookie = function (e) {
            var t, a = new RegExp("(^| )" + e + "=([^;]*)(;|$)");
            return (t = document.cookie.match(a)) ? unescape(t[2]) : null
        }, d.setBpmnProperties = function (e, t) {
            try {
                "undefined" == typeof e[0].tagName || "INPUT" !== e[0].tagName && "SELECT" !== e[0].tagName ? e.text(t) : e.val(t), this.fireEvent(e[0], "input"), this.fireEvent(e[0], "change")
            } catch (a) {
                console.log(e[0]), console.log(e.tagName), console.log(e), console.log(a)
            }
        }, d.getSpendTime = function (e, t) {
            if (void 0 != e) {
                if (e = e.replace(/\-/g, "/"), null != t) {
                    t = t.replace(/\-/g, "/");
                    var a = new Date(t).getTime() - new Date(e).getTime()
                } else a = (new Date).getTime() - new Date(e).getTime();
                var n = parseInt(a / 1e3 / 60 / 60 / 24),
                    i = parseInt(a / 1e3 / 60 / 60 % 24),
                    c = parseInt(a / 1e3 / 60 % 60);
                return 0 == n && 0 == i && c <= 0 ? "一分钟以内" : 0 == n && 0 == i ? c + "分钟" : 0 == n ? i + "小时" + c + "分钟" : n + "天" + i + "小时" + c + "分钟"
            }
        }, d.query = function (e) {
            var t = new RegExp("(^|&)" + e + "=([^&]*)(&|$)", "i"),
                a = window.location.search.substr(1).match(t);
            return null != a ? unescape(a[2]) : null
        }, d.getUrlParam = function (e) {
            var t = e.split("?")[1].split("#")[0];
            if (!t) return {};
            for (var a = t.split("&"), n = {}, i = 0; i < a.length; i++) {
                var c = a[i].split("=")[0],
                    o = a[i].split("=")[1];
                n[c] = o
            }
            return n
        }, d.setVueData = function (e, t) {
            for (var a in t) e[a] = t[a]
        }, d.getWebId = function () {
            return appConfig.webId
        }, d.getWebStyle = function (e) {
            return this.getWebId()
        }, d.getClientType = function (e) {
            var t = e.replace("/", "");
            return "m_" == t.substr(0, 2)
        }, d.mergeObj = function (e, t, a) {
            return e = e || {}, t = t || {}, a = a || {}, Object(n["a"])(Object(n["a"])(Object(n["a"])({}, e), t), a)
        }, d.timestampToTime = function (e) {
            var t = new Date(1e3 * e),
                a = t.getFullYear() + "-",
                n = (t.getMonth() + 1 < 10 ? "0" + (t.getMonth() + 1) : t.getMonth() + 1) + "-",
                i = t.getDate() + " ",
                c = t.getHours() + ":",
                o = t.getMinutes() + ":",
                s = t.getSeconds();
            return a + n + i + c + o + s
        }, d.getStrTime = function (e, t) {
            var a = t ? new Date(t) : new Date,
                n = {};
            for (var i in n["Y"] = a.getFullYear(), n["m"] = a.getMonth() + 1, n["d"] = a.getDate(), n["H"] = a.getHours(), n["i"] = a.getMinutes(), n["s"] = a.getSeconds(), n["m"] = n["m"] >= 10 ? n["m"] : "0" + n["m"], n["d"] = n["d"] >= 10 ? n["d"] : "0" + n["d"], n["H"] = n["H"] >= 10 ? n["H"] : "0" + n["H"], n["i"] = n["i"] >= 10 ? n["i"] : "0" + n["i"], n["s"] = n["s"] >= 10 ? n["s"] : "0" + n["s"], n) e = e.replace(i, n[i]);
            return e
        }, d.swapArray = function (e, t, a) {
            return e[t] = e.splice(a, 1, e[t])[0], e
        }, d.getDocumentTitle = function (e, t) {
            "buaa" == appConfig.webId ? document.title = "网上办事大厅-".concat(e) : "pku" == appConfig.webId ? document.title = "北京大学网上办事大厅" : document.title = e
        }, d.toExtend = function (e, t) {
            switch (e.type) {
                case "download":
                    var a = r["a"].getApi(e.url);
                    window.open(this.setGetUrl(a, t));
                    break
            }
        }, d.setGetUrl = function (e, t) {
            var a = "";
            for (var n in t) a += n + "=" + t[n] + "&";
            return a && (a = a.slice(0, -1)), e + "?" + a
        }, d.closePage = function () {
            var e = navigator.appName;
            "Netscape" == e && (window.open("", "_self", ""), window.close()), "Microsoft Internet Explorer" == e && (window.parent.opener = "whocares", window.parent.close())
        }, d.isUrl = function (e) {
            var t = /^(?=^.{3,255}$)(http(s)?:\/\/)(www\.)?/;
            return t.test(e)
        }, d.getWordLength = function (e) {
            var t = 0;
            try {
                e = e.replace(/(\r\n+|\s+|　+)/g, "龘"), e = e.replace(/[\x00-\xff]/g, "m"), e = e.replace(/m+/g, "*"), e = e.replace(/龘+/g, ""), t = e.length
            } catch (a) {}
            return t
        }, d.validateWordNumber = function (e, t, a) {
            var n = d.getWordLength(e);
            return t && a ? !!(n <= t && n >= a) : t && !a ? !!(n <= t) : !t && a ? !!(n >= a) : void 0
        }, d.toInfoCenter = function () {
            var e = u["a"].getConfigId("ucenterPath", window.location.hostname);
            if (e.includes(".")) {
                var t = "";
                e.includes("http") || (t = "".concat(window.location.protocol, "//")), window.open(t + e, "_blank")
            } else window.open(appConfig.baseUrl + e, "_blank")
        }, d.minipDownloadFile = function (e, t) {
            "miniprogram" === window.__wxjs_environment ? d.appFetch({
                url: "getDownloadFile",
                method: "get",
                data: {
                    id: t
                }
            }).then((function (e) {
                0 == e.e ? wx.miniProgram.navigateTo({
                    url: "../downloadFile/downloadFile?downloadUrl=".concat(encodeURIComponent(e.d))
                }) : 1 == e.e ? o["default"].prototype.$message({
                    message: "文件大于50M，不能通过小程序 下载，请到电脑进行下载",
                    type: "warning",
                    showClose: !0
                }) : o["default"].prototype.$message({
                    type: "error",
                    message: e.m,
                    showClose: !0
                })
            })).catch((function (e) {
                o["default"].prototype.$message({
                    type: "error",
                    message: "系统错误",
                    showClose: !0
                })
            })) : window.open(e)
        }, d.appFetch = s["a"], o["default"].prototype.appCommonH || (o["default"].prototype.appCommonH = d), t["a"] = d
    }
});
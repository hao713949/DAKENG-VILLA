// data.js
const unitDatabase = {
    "C1": {
        id: "C1",
        title: "地號 487-007 ‧ 核心領袖單元",
        password: "1934",
        summary: {
            price: "1,934.88",      // 總價 (萬元)
            unitPrice: "9.03",      // 單價 (萬元/坪)
            totalArea: "214.22",    // 總面積 (坪)
            shareRatio: "1360 / 100,000" // 持分比例
        },
        visuals: {
            droneView: "C1.png"     // 航拍圖資
        },
        landDetails: [
            { id: "487-007", private: "158.537", public: "55.687", total: "214.224" }
        ],
        note: "核心地段，具備極佳的資產保值性與開發潛力。"
    },
    "C2": {
        id: "C2",
        title: "地號 487-020、487-021 ‧ 核心領袖單元",
        password: "2616",
        summary: {
            price: "2,616.12",
            unitPrice: "9.03",
            totalArea: "289.65",
            shareRatio: "1839 / 100,000"
        },
        visuals: {
            droneView: "C2.png"
        },
        landDetails: [
            { id: "487-020", private: "152.227", public: "53.470", total: "205.697" },
            { id: "487-021", private: "62.128", public: "21.822", total: "83.950" }
        ],
        note: "雙地號整合單元，面寬優勢利於建築配置。"
    },
    "C6": {
        id: "C6",
        title: "地號 487-027、487-028、487-029 ‧ 隱境首席單元",
        password: "3586",
        summary: {
            price: "3,586.71",
            unitPrice: "8.83",
            totalArea: "406.10",
            shareRatio: "2578 / 100,000"
        },
        visuals: {
            droneView: "C6.png"
        },
        landDetails: [
            { id: "487-027", private: "116.272", public: "40.841", total: "157.11" },
            { id: "487-028", private: "92.471", public: "32.481", total: "124.95" },
            { id: "487-029", private: "91.794", public: "32.243", total: "124.04" }
        ],
        note: "大尺度三地號合構，全區稀有高綠覆隱密席位。"
    },
    "D1": {
        id: "D1",
        title: "地號 487-056、487-057 ‧ 閱景單元*",
        password: "2953",
        summary: {
            price: "2,953.10",
            unitPrice: "8.65",
            totalArea: "341.48",
            shareRatio: "2168 / 100,000"
        },
        visuals: {
            droneView: "D1.png"
        },
        landDetails: [
            { id: "487-056", private: "178.466", public: "62.687", total: "241.15" },
            { id: "487-057", private: "74.249", public: "26.080", total: "100.33" }
        ],
        note: "視野開闊，具備極佳的天際線景觀。"
    },
    // ... 其他編號以此類推封裝
};

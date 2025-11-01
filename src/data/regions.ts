export interface Region {
  id: string;
  name: string;
  center: string[];
  details: {
    administrativeDivision: string;
    population: string;
    governor: string;
    districts: number;
    villages: number;
    neighborhoods: number;
    gdp: string;
  };
}

export const regions: Region[] = [
  {
    id: "toshkent-shahar",
    name: "Toshkent shahar",
    center: ["toshkent", "ташкент"],
    details: {
      administrativeDivision: "Respublika ahamiyatidagi shahar",
      population: "2,900,000",
      governor: "Shavkat Umurzakov",
      districts: 12,
      villages: 0,
      neighborhoods: 121,
      gdp: "83.2 trillion so'm"
    }
  },
  {
    id: "andijon",
    name: "Andijon",
    center: ["andijon", "андижон", "andijon shahar", "андижон шаҳар"],
    details: {
      administrativeDivision: "Viloyat",
      population: "3,200,000",
      governor: "Shuhrat Ganiyev",
      districts: 14,
      villages: 979,
      neighborhoods: 81,
      gdp: "28.5 trillion so'm"
    }
  },
  {
    id: "buxoro",
    name: "Buxoro",
    center: ["buxoro", "бухоро", "buxoro shahar", "бухоро шаҳар"],
    details: {
      administrativeDivision: "Viloyat",
      population: "1,900,000",
      governor: "Botir Zaripov",
      districts: 11,
      villages: 1109,
      neighborhoods: 58,
      gdp: "28.1 trillion so'm"
    }
  },
  {
    id: "fargona",
    name: "Farg'ona",
    center: ["farg'ona", "фарғона", "farғona", "fargona", "фаргона", "farg'ona shahar", "фарғона шаҳар"],
    details: {
      administrativeDivision: "Viloyat",
      population: "3,800,000",
      governor: "Shukhrat Ganiyev",
      districts: 15,
      villages: 922,
      neighborhoods: 81,
      gdp: "36.2 trillion so'm"
    }
  },
  {
    id: "jizzax",
    name: "Jizzax",
    center: ["jizzax", "жиззах", "jizzax shahar", "жиззах шаҳар"],
    details: {
      administrativeDivision: "Viloyat",
      population: "1,400,000",
      governor: "Odiljon Toshmatov",
      districts: 12,
      villages: 1021,
      neighborhoods: 40,
      gdp: "18.7 trillion so'm"
    }
  },
  {
    id: "xorazm",
    name: "Xorazm",
    center: ["urganch", "урганч", "urganch shahar", "урганч шаҳар"],
    details: {
      administrativeDivision: "Viloyat",
      population: "1,900,000",
      governor: "Agzam Atajonov",
      districts: 10,
      villages: 1059,
      neighborhoods: 46,
      gdp: "20.3 trillion so'm"
    }
  },
  {
    id: "namangan",
    name: "Namangan",
    center: ["namangan", "наманган", "namangan shahar", "наманган шаҳар"],
    details: {
      administrativeDivision: "Viloyat",
      population: "2,900,000",
      governor: "Sherzod Kudbiyev",
      districts: 11,
      villages: 953,
      neighborhoods: 74,
      gdp: "26.8 trillion so'm"
    }
  },
  {
    id: "navoiy",
    name: "Navoiy",
    center: ["navoiy", "навоий", "navoiy shahar", "навоий шаҳар"],
    details: {
      administrativeDivision: "Viloyat",
      population: "1,000,000",
      governor: "Sherzod Khodiyev",
      districts: 8,
      villages: 713,
      neighborhoods: 32,
      gdp: "41.2 trillion so'm"
    }
  },
  {
    id: "qashqadaryo",
    name: "Qashqadaryo",
    center: ["qarshi", "қарши", "qarshi shahar", "қарши шаҳар"],
    details: {
      administrativeDivision: "Viloyat",
      population: "3,400,000",
      governor: "Zoyir Mirzayev",
      districts: 14,
      villages: 1722,
      neighborhoods: 69,
      gdp: "39.4 trillion so'm"
    }
  },
  {
    id: "qoraqalpogiston",
    name: "Qoraqalpog'iston",
    center: ["nukus", "нукус", "nukus shahar", "нукус шаҳар"],
    details: {
      administrativeDivision: "Respublika",
      population: "1,900,000",
      governor: "Nurmurod Amonullayev",
      districts: 16,
      villages: 1555,
      neighborhoods: 46,
      gdp: "18.9 trillion so'm"
    }
  },
  {
    id: "samarqand",
    name: "Samarqand",
    center: ["samarqand", "самарқанд", "samarqand shahar", "самарқанд шаҳар"],
    details: {
      administrativeDivision: "Viloyat",
      population: "4,100,000",
      governor: "Erkin Turdimov",
      districts: 14,
      villages: 1415,
      neighborhoods: 78,
      gdp: "44.5 trillion so'm"
    }
  },
  {
    id: "sirdaryo",
    name: "Sirdaryo",
    center: ["guliston", "гулистон", "guliston shahar", "гулистон шаҳар"],
    details: {
      administrativeDivision: "Viloyat",
      population: "850,000",
      governor: "Bakhtiyor Rahimov",
      districts: 8,
      villages: 550,
      neighborhoods: 27,
      gdp: "10.8 trillion so'm"
    }
  },
  {
    id: "surxondaryo",
    name: "Surxondaryo",
    center: ["termiz", "термиз", "termiz shahar", "термиз шаҳар"],
    details: {
      administrativeDivision: "Viloyat",
      population: "2,600,000",
      governor: "Ulug'bek Kosimov",
      districts: 14,
      villages: 1474,
      neighborhoods: 64,
      gdp: "23.7 trillion so'm"
    }
  },
  {
    id: "toshkent",
    name: "Toshkent viloyati",
    center: ["toshkent", "ташкент", "nurafshon", "нурафшон", "chirchiq", "чирчиқ"],
    details: {
      administrativeDivision: "Viloyat",
      population: "3,100,000",
      governor: "Zoxid Xamdamov",
      districts: 15,
      villages: 987,
      neighborhoods: 88,
      gdp: "52.3 trillion so'm"
    }
  },
];

export const validateRegionCenter = (regionId: string, centerInput: string): boolean => {
  const region = regions.find((r) => r.id === regionId);
  if (!region) return false;

  const normalizedInput = centerInput.toLowerCase().trim();
  return region.center.some((center) => center.toLowerCase() === normalizedInput);
};

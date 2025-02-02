const clients = [
  {
    id: 1,
    first_name: "Romona",
    last_name: "Byrch",
    email: "rbyrch0@phoca.cz",
    commandes: [
      {
        id: 1,
        product: "Beef - Tongue, Cooked",
        quantities: 9,
        price: 15.2,
        amount: 136.8,
      },
      {
        id: 2,
        product: "Wine - White, Chardonnay",
        quantities: 16,
        price: 89.7,
        amount: 1435.2,
      },
      {
        id: 3,
        product: "Cheese - Grana Padano",
        quantities: 15,
        price: 73.97,
        amount: 1109.55,
      },
    ],
  },
  {
    id: 2,
    first_name: "Doralyn",
    last_name: "Randall",
    email: "drandall1@hhs.gov",
    commandes: [
      {
        id: 1,
        product: "Beer - Fruli",
        quantities: 11,
        price: 9.88,
        amount: 108.68,
      },
      {
        id: 2,
        product: "Muffin - Mix - Mango Sour Cherry",
        quantities: 1,
        price: 3.92,
        amount: 3.92,
      },
    ],
  },
  {
    id: 3,
    first_name: "Codee",
    last_name: "Webb",
    email: "cwebb2@army.mil",
    commandes: [
      {
        id: 1,
        product: "Broom And Broom Rack White",
        quantities: 5,
        price: 73.19,
        amount: 365.95,
      },
      {
        id: 2,
        product: "Coffee - Hazelnut Cream",
        quantities: 20,
        price: 67.03,
        amount: 1340.6,
      },
      {
        id: 3,
        product: "Bag - Regular Kraft 20 Lb",
        quantities: 19,
        price: 26.77,
        amount: 508.63,
      },
    ],
  },
  {
    id: 4,
    first_name: "Case",
    last_name: "Lambourne",
    email: "clambourne3@harvard.edu",
    commandes: [
      {
        id: 1,
        product: "Soup - French Onion",
        quantities: 12,
        price: 48.06,
        amount: 576.72,
      },
      {
        id: 2,
        product: "Bay Leaf Fresh",
        quantities: 14,
        price: 54.29,
        amount: 760.06,
      },
      {
        id: 3,
        product: "Pimento - Canned",
        quantities: 19,
        price: 48.66,
        amount: 924.54,
      },
    ],
  },
  {
    id: 5,
    first_name: "Byrann",
    last_name: "Nore",
    email: "bnore4@house.gov",
    commandes: [],
  },
  {
    id: 6,
    first_name: "Carmella",
    last_name: "Ajam",
    email: "cajam5@uiuc.edu",
    commandes: [
      {
        id: 1,
        product: "Beef Tenderloin Aaa",
        quantities: 2,
        price: 2.22,
        amount: 4.44,
      },
      {
        id: 2,
        product: "Chicken - Diced, Cooked",
        quantities: 20,
        price: 1.38,
        amount: 27.6,
      },
      {
        id: 3,
        product: "Cassis",
        quantities: 10,
        price: 17.53,
        amount: 175.3,
      },
    ],
  },
  {
    id: 7,
    first_name: "Sollie",
    last_name: "Brennon",
    email: "sbrennon6@live.com",
    commandes: [
      {
        id: 1,
        product: "Guinea Fowl",
        quantities: 12,
        price: 9.93,
        amount: 119.16,
      },
    ],
  },
  {
    id: 8,
    first_name: "Shellie",
    last_name: "Sidary",
    email: "ssidary7@mail.ru",
    commandes: [
      {
        id: 1,
        product: "Sultanas",
        quantities: 18,
        price: 90.36,
        amount: 1626.48,
      },
    ],
  },
  {
    id: 9,
    first_name: "Bat",
    last_name: "Couth",
    email: "bcouth8@google.pl",
    commandes: [
      {
        id: 1,
        product: "Beef Striploin Aaa",
        quantities: 9,
        price: 90.5,
        amount: 814.5,
      },
      {
        id: 2,
        product: "Buttons",
        quantities: 12,
        price: 47.88,
        amount: 574.56,
      },
      {
        id: 3,
        product: "Swiss Chard",
        quantities: 14,
        price: 20.67,
        amount: 289.38,
      },
    ],
  },
  {
    id: 10,
    first_name: "Leanna",
    last_name: "Gemelli",
    email: "lgemelli9@dyndns.org",
    commandes: [],
  },
  {
    id: 11,
    first_name: "Lucine",
    last_name: "Jessard",
    email: "ljessarda@tripod.com",
    commandes: [],
  },
  {
    id: 12,
    first_name: "Andre",
    last_name: "Ganniclifft",
    email: "aganniclifftb@virginia.edu",
    commandes: [
      {
        id: 1,
        product: "Crackers - Graham",
        quantities: 11,
        price: 64.69,
        amount: 711.59,
      },
    ],
  },
  {
    id: 13,
    first_name: "Esta",
    last_name: "Delany",
    email: "edelanyc@dedecms.com",
    commandes: [
      {
        id: 1,
        product: "Clams - Littleneck, Whole",
        quantities: 6,
        price: 89.12,
        amount: 534.72,
      },
    ],
  },
  {
    id: 14,
    first_name: "Carina",
    last_name: "Jillett",
    email: "cjillettd@4shared.com",
    commandes: [
      {
        id: 1,
        product: "Onion Powder",
        quantities: 5,
        price: 31.7,
        amount: 158.5,
      },
    ],
  },
  {
    id: 15,
    first_name: "Deina",
    last_name: "McKinie",
    email: "dmckiniee@patch.com",
    commandes: [],
  },
  {
    id: 16,
    first_name: "Mellisa",
    last_name: "Arnoll",
    email: "marnollf@etsy.com",
    commandes: [
      {
        id: 1,
        product: "Steamers White",
        quantities: 12,
        price: 89.1,
        amount: 1069.2,
      },
      {
        id: 2,
        product: "Thermometer Digital",
        quantities: 1,
        price: 59.37,
        amount: 59.37,
      },
    ],
  },
  {
    id: 17,
    first_name: "Stesha",
    last_name: "Crosscombe",
    email: "scrosscombeg@bloglovin.com",
    commandes: [
      {
        id: 1,
        product: "Miso - Soy Bean Paste",
        quantities: 15,
        price: 42.43,
        amount: 636.45,
      },
    ],
  },
  {
    id: 18,
    first_name: "Dorey",
    last_name: "Westwood",
    email: "dwestwoodh@weibo.com",
    commandes: [],
  },
  {
    id: 19,
    first_name: "Page",
    last_name: "Cheak",
    email: "pcheaki@msu.edu",
    commandes: [
      {
        id: 1,
        product: "Snapple Raspberry Tea",
        quantities: 13,
        price: 48.66,
        amount: 632.58,
      },
      {
        id: 2,
        product: "Steamers White",
        quantities: 16,
        price: 89.16,
        amount: 1426.56,
      },
      {
        id: 3,
        product: "Towel Multifold",
        quantities: 16,
        price: 55.63,
        amount: 890.08,
      },
    ],
  },
  {
    id: 20,
    first_name: "Gwendolyn",
    last_name: "Letessier",
    email: "gletessierj@archive.org",
    commandes: [
      {
        id: 1,
        product: "Tea - Earl Grey",
        quantities: 4,
        price: 45.3,
        amount: 181.2,
      },
      {
        id: 2,
        product: "Mushroom - Morels, Dry",
        quantities: 13,
        price: 56.14,
        amount: 729.82,
      },
    ],
  },
  {
    id: 21,
    first_name: "Cheslie",
    last_name: "Wither",
    email: "cwitherk@blogs.com",
    commandes: [],
  },
  {
    id: 22,
    first_name: "Guthrey",
    last_name: "Costar",
    email: "gcostarl@addtoany.com",
    commandes: [
      {
        id: 1,
        product: "Beer - Tetleys",
        quantities: 19,
        price: 21.15,
        amount: 401.85,
      },
    ],
  },
  {
    id: 23,
    first_name: "Archy",
    last_name: "Senior",
    email: "aseniorm@pcworld.com",
    commandes: [
      {
        id: 1,
        product: "Rice - Brown",
        quantities: 17,
        price: 45.9,
        amount: 780.3,
      },
      {
        id: 2,
        product: "Wine - Red, Gamay Noir",
        quantities: 2,
        price: 9.04,
        amount: 18.08,
      },
    ],
  },
  {
    id: 24,
    first_name: "Tandy",
    last_name: "Waldock",
    email: "twaldockn@chronoengine.com",
    commandes: [
      {
        id: 1,
        product: "Macaroons - Homestyle Two Bit",
        quantities: 20,
        price: 27.18,
        amount: 543.6,
      },
    ],
  },
  {
    id: 25,
    first_name: "Winifred",
    last_name: "Babber",
    email: "wbabbero@samsung.com",
    commandes: [],
  },
  {
    id: 26,
    first_name: "Leora",
    last_name: "Jirzik",
    email: "ljirzikp@clickbank.net",
    commandes: [
      {
        id: 1,
        product: "Juice - Apple 284ml",
        quantities: 4,
        price: 55.85,
        amount: 223.4,
      },
    ],
  },
  {
    id: 27,
    first_name: "Christabel",
    last_name: "Scurlock",
    email: "cscurlockq@illinois.edu",
    commandes: [
      {
        id: 1,
        product: "Ginger - Fresh",
        quantities: 19,
        price: 27.37,
        amount: 520.03,
      },
    ],
  },
  {
    id: 28,
    first_name: "Wilone",
    last_name: "Conant",
    email: "wconantr@cnn.com",
    commandes: [
      {
        id: 1,
        product: "Beef - Ox Tail, Frozen",
        quantities: 18,
        price: 68.84,
        amount: 1239.12,
      },
      {
        id: 2,
        product: "Lemon Grass",
        quantities: 5,
        price: 95.33,
        amount: 476.65,
      },
    ],
  },
  {
    id: 29,
    first_name: "Brennan",
    last_name: "Langman",
    email: "blangmans@geocities.com",
    commandes: [
      {
        id: 1,
        product: "Pears - Bartlett",
        quantities: 4,
        price: 61.42,
        amount: 245.68,
      },
    ],
  },
  {
    id: 30,
    first_name: "Gillian",
    last_name: "Molan",
    email: "gmolant@chicagotribune.com",
    commandes: [
      {
        id: 1,
        product: "Beer - Camerons Auburn",
        quantities: 1,
        price: 82.23,
        amount: 82.23,
      },
      {
        id: 2,
        product: "Guinea Fowl",
        quantities: 11,
        price: 87.39,
        amount: 961.29,
      },
      {
        id: 3,
        product: "Muffin Hinge 117n",
        quantities: 17,
        price: 11.21,
        amount: 190.57,
      },
    ],
  },
];

module.exports = clients;

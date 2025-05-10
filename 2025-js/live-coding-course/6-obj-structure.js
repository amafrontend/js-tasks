const obj = {
  id: 1,
  instrument_type: 'stock',
  instrument_name: 'Alrosa',
  contract: {
    id: 12,
    size: 25,
    payment: {
      value: '125',
      currency: 'RUB',
    },
  },
};

// Привести к структуре

[
  'id: 1',
  'Instrument type: stock',
  'Instrument name: Alrosa',
  'Contract id: 12',
  'Contract size: 25',
  'Contract payment value: 125',
  'Contract payment currency: RUB',
]

// Учесть возможность бесконечной вложеннсти объектов

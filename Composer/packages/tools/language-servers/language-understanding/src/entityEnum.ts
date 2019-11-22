export const EntityTypesObj = {
  EntityType: ['ml', 'prebuilt', 'regex', 'list', 'composite', 'patternany', 'phraselist', 'simple'],
  Prebuilt: [
    'age',
    'datetimeV2',
    'dimension',
    'email',
    'geographyV2',
    'keyPhrase',
    'money',
    'number',
    'ordinal',
    'ordinalV2',
    'percentage',
    'personName',
    'phonenumber',
    'temperature',
    'url',
    'datetime',
  ],
};

export type currentLineState = 'ml_entity' | 'intent' | 'utterance' | 'others';
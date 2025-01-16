import { faker } from '@faker-js/faker';

export function generateDummyData(template: any, count: number): any[] {
  const result = [];
  
  for (let i = 0; i < count; i++) {
    result.push(generateSingleItem(template));
  }
  
  return result;
}

function generateSingleItem(template: any): any {
  if (typeof template === 'string') {
    // Handle special placeholders
    if (template.startsWith('{{') && template.endsWith('}}')) {
      const type = template.slice(2, -2).trim();
      return generateFakerData(type);
    }
    return template;
  }
  
  if (Array.isArray(template)) {
    return template.map(item => generateSingleItem(item));
  }
  
  if (typeof template === 'object') {
    const result: any = {};
    for (const [key, value] of Object.entries(template)) {
      result[key] = generateSingleItem(value);
    }
    return result;
  }
  
  return template;
}

function generateFakerData(type: string): any {
  switch (type.toLowerCase()) {
    case 'name':
      return faker.person.fullName();
    case 'email':
      return faker.internet.email();
    case 'phone':
      return faker.phone.number();
    case 'address':
      return faker.location.streetAddress();
    case 'company':
      return faker.company.name();
    case 'date':
      return faker.date.past().toISOString();
    case 'number':
      return faker.number.int({ min: 1, max: 1000 });
    case 'boolean':
      return faker.datatype.boolean();
    case 'uuid':
      return faker.string.uuid();
    case 'paragraph':
      return faker.lorem.paragraph();
    default:
      return faker.lorem.word();
  }
}

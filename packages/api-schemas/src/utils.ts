import { ApiProperty } from "@nestjs/swagger";

// Decorator condicional para o NestJS
export function ConditionalApiProperty(
  condition: boolean,
  options: object,
): PropertyDecorator {
  console.log(condition);
  return (target: Object, propertyKey: string | symbol) => {
    if (condition) {
      ApiProperty(options || {})(target, propertyKey);
    }
  };
}

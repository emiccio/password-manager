type TypeElement = "" | "password";

export type DataHeaderMainItemProps = {
  icon: React.ComponentType<{className?: string}>,
  typeElement: TypeElement,
  text: string
}
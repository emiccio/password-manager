import { toast } from "@/hooks/use-toast"

export const copyClipboard = (value: string) => {
  console.log('asdas')
  navigator.clipboard.writeText(value)
  toast({
    title: "Copiado",
  })
}
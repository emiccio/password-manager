"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { formSchema } from "./FormAddElements.form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Copy, Earth, Eye, Shuffle } from "lucide-react"
import { copyClipboard } from "@/lib/copyClipboard"
import { useState } from "react"
 

export function FormAddElements() {
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      typeElement: "",
      isFavourite: false,
      name: "",
      directory: "",
      username: "",
      password: "",
      urlWebsite: "",
      notes: "",
      userId: "",
    },
  })
 
  // 2. Define a submit handler.
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  const updateUrl = () => {
    form.setValue("urlWebsite", window.location.href);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="md:grid-cols-2 gap-y-2 gap-x-4 grid">
        <FormField
          control={ form.control}
          name="typeElement"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Que tipo de elemento necesitas?</FormLabel>
              <Select onValueChange={ field.onChange } defaultValue={ field.value }>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder={'Select a directory for your password'} />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value={"Inicio de sesion"}>Inicio de sesion</SelectItem>
                  <SelectItem value={"Tarjeta"}>Tarjeta</SelectItem>
                  <SelectItem value={"Identidad"}>Identidad</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={ form.control }
          name="isFavourite"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Marcar como favorita?</FormLabel>
              <div className="flex flex-row items-start space-x-3 space-y-0 p-4">
                <FormControl>
                  <Checkbox checked={ field.value } onCheckedChange={ field.onChange } />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>Marcar como favorito</FormLabel>
                </div>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField 
          control={ form.control }
          name="name"
          render={ ({ field }) => (
            <FormItem>
              <FormLabel>Nombre</FormLabel>
              <FormControl>
                <Input { ...field } />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={ form.control }
          name="directory"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Direectorio</FormLabel>
              <Select onValueChange={ field.onChange } defaultValue={ field.value }>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder={'Elige un directorio'} />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value={"Social"}>Social</SelectItem>
                  <SelectItem value={"Arts"}>Arts</SelectItem>
                  <SelectItem value={"Shopping"}>Shopping</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField 
          control={ form.control }
          name="username"
          render={ ({ field }) => (
            <FormItem>
              <FormLabel>Usuario</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input { ...field } />
                  <Copy className="absolute top-3 right-4 cursor-pointer" 
                    size={18}
                    onClick={() => {
                      copyClipboard(field.value)
                    }}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField 
          control={ form.control }
          name="urlWebsite"
          render={ ({ field }) => (
            <FormItem>
              <FormLabel>URL website</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input { ...field } />
                  <Earth 
                    className="absolute top-3 right-4 cursor-pointer" 
                    size={18} 
                    onClick={updateUrl}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField 
          control={ form.control }
          name="password"
          render={ ({ field }) => (
            <FormItem>
              <FormLabel className="flex justify-between">
                Password
                <Shuffle 
                  className="cursor-pointer" 
                  size={15} 
                  onClick={() => {
                    console.log('generate password')
                  }}
                />
              </FormLabel>
              <FormControl>
                <div className="relative">
                  <Input { ...field } type={ showPassword ? "text" : "password" } />
                  <Eye 
                    className="absolute top-3 right-12 cursor-pointer" 
                    size={18} 
                    onClick={() => {
                      setShowPassword(!showPassword)
                    }}
                  />
                  <Copy className="absolute top-3 right-4 cursor-pointer" 
                    size={18}
                    onClick={() => {
                      copyClipboard(field.value)
                    }}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}

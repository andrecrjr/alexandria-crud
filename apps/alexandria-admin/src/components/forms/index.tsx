import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@alexandria/ui/src/components/ui/card";
import { Label } from "@alexandria/ui/src/components/ui/label";
import { Textarea } from "@alexandria/ui/src/components/ui/textarea";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@alexandria/ui/src/components/ui/select";
import { Button } from "@alexandria/ui/src/components/ui/button";
import { Input } from "@alexandria/ui/src/components/ui/input";
// import { useForm } from "react-hook-form";

const FormInput = () => {
  return (
    <form className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle>Registro de Livros</CardTitle>
        <CardDescription>
          Preencha os campos abaixo para cadastrar um novo livro.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="title">Título</Label>
            <Input id="title" placeholder="Digite o título do livro" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="author">Autor</Label>
            <Input id="author" placeholder="Digite o nome do autor" />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="description">Descrição</Label>
          <Textarea
            id="description"
            placeholder="Digite a descrição do livro"
            rows={4}
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="category">Categoria</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Selecione a categoria" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="fiction">Ficção</SelectItem>
                <SelectItem value="non-fiction">Não-Ficção</SelectItem>
                <SelectItem value="biography">Biografia</SelectItem>
                <SelectItem value="poetry">Poesia</SelectItem>
                <SelectItem value="children">Infantil</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="price">Preço</Label>
            <Input
              id="price"
              placeholder="Digite o preço do livro"
              type="number"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="publication-date">Data de Publicação</Label>
            <Input id="publication-date" type="date" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="cover">Capa</Label>
            <Input id="cover" type="file" />
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="ml-auto" type="submit">
          Salvar
        </Button>
      </CardFooter>
    </form>
  );
};

export default FormInput;

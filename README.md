# Toolkit

Essa aplicação tem o objetivo de juntar e configurar as bibliotecas e classes mais utilizadas nos projetos dessa conta. São sete módulos que compõem esse tookit, para usar ele você deve importar toolkit, após isso digite:

```sh
  toolkit.
```
E a frente do ponto digite o nome de um dos seguintes módulos:

- jsonWebToken
- environment
- email
- cache
- password
- validation
- error
- generation

## Error - É um conjunto de classes customizadas de erros

### Não necessita de variáveis de ambiente para ser utilizado

Para ver as informaçõe que os erros retornam acesse | https://github.com/JPedro109/toolkit/tree/master/src/modules/Error/Classes

- EmailInvalidError | Excessão para e-mail inválido
- PasswordInvalidError | Excessão para senha inválida
- MissingParamError | Excessão para erros relacionados a falta de envio de parâmetros
- UnauthorizedError | Excessão para falta de autorização
- UnauthorizedError | Excessão para proibição de chamadas pelo servidor

## Environment - Conjunto de funções relacionadas com o retorno de variáveis de ambiente

### Não necessita de variáveis de ambiente para ser utilizado
```sh
  getValue(key: string): string | undefined - Retorna uma variável de ambiente
```
```sh
  getRequiredValue(key: string): string - Retorna uma variável de ambiente, se ela não exister é lançada uma excessão
```

## Cache - Conjunto de funções para gerenciar o cache da aplicação

### Não necessita de variáveis de ambiente para ser utilizado

```sh
  set<Type>(key: string, value: Type, expiryTime?: number): void - Armazena um novo cache
```

```sh
  get<Type>(key: string): Type - Retorna um cache
```

```sh
  del(key: string): void - Deleta um cache
```

## Validation - Conjunto de funções exercer validar um e-mail ou uma senha

### Não necessita de variáveis de ambiente para ser utilizado

```sh
  email(email: string): boolean - Valida um e-mail
```

```sh
  password(password: string): boolean - Valida se a senha tem 8 caracteres, uma letra maiúscula, uma minúscula e um número
```

## Generation - Conjunto de funções gerar um id, token ou tempo de expiração de um token

### Não necessita de variáveis de ambiente para ser utilizado

```sh
  id(): string - Gera um id
```

```sh
  token(): string - Gera um token
```

```sh
 tokenExpirationTime(timeInMinutes: number): number - Gera uma data de vencimento do tokem em milissegundos
```

## Password - Conjunto de funções para tratamento de senha

### Não necessita de variáveis de ambiente para ser utilizado

```sh
  encryptPassword(password: string): string - Gera um encriptação de senha
```

```sh
  comparePasswordEncrypt(password: string, userPassword: string): boolean - Compara uma senha encriptada com uma não encriptada
```

## JsonWebToken - Conjunto de funções para tratamento do json web token

### Necessita de variáveis de ambiente para ser utilizado 

- JWT_SECRET_KEY | É a chave de geração do json web token, com ele pode ser gerado e validado

```sh
  createToken(payload: object, expiryTimeInSeconds: number): string - Gera um json web token
```

```sh
  tokenVerification(token: string, secretKey: string): JsonWebTokenModel - Valida um json web token
```

## Email - Módulo de envio de e-mail

### Necessita de variáveis de ambiente para ser utilizado 

- INITIALIZED_EMAIL_MODULE | Deve estar como true para o módulo de e-mail ser ativado
- PROVIDER_HOST_EMAIL_MODULE| É o servidor de envio de e-mail
- PROVIDER_PORT_EMAIL_MODULE | É a porta do servidor de envio de e-mail
- PROVIDER_EMAIL_EMAIL_MODULE | É o e-mail que será usado como remente
- PROVIDER_PASSWORD_EMAIL_MODULE | É a senha do e-mail que será usado como remente
- PROVIDER_EMAILBODIESPATH_EMAIL_MODULE | É o local onde estão o corpos de email, o caminho dever partir da raiz do projeto

```sh
  sendMailsendMail(to: string, subject: string, template: string, context?: object): Promise<void> - Envia um e-mail
```

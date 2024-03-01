#  Gestão de pontos de jornada de trabalho.

 Desafio

## Requirements

 - [x] O sistema deve ser protegido por login e senha.
 - [x] Os dados de usuários e pontos devem ser persistidos em banco de dados.
 - [x] Um ponto representa o registro de entrada ou saída de expediente durante a jornada de trabalho de um usuário (colaborador).
 - [x] O sistema deve ter suporte para dois tipos de usuários: Usuário Administrador e Usuário Comum
 - [x] O usuário comum não poderá cadastrar novos usuários.

## Getting Started

## Project setup
```
npm install         
```

## Project start development
```
npm run dev
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
 * O sistema terá que contar com o [frontend](https://github.com/EdsonCandido/gestao-jornada-frontend) em execução.

* Deverá ter uma instancia do postgres sendo executada, tem um arquivo onde se tem uma image docker configurada previamente.

Ao acessar o postgres, deve-se rodar o seguinte script

```
CREATE TABLE users (
	id SERIAL PRIMARY KEY,
    name varchar(100) NOT NULL,
    is_admin int DEFAULT 0,
    login varchar(255),
    password varchar(255),
    work_regime int NULL,
    created_at timestamp DEFAULT current_timestamp ,
    updated_at timestamp DEFAULT current_timestamp 
);

CREATE TABLE journey_points(
	id SERIAL PRIMARY KEY,
	user_id int NOT NULL,
	prohibited timestamp DEFAULT null,
    outputs timestamp DEFAULT null,
    worked_hours decimal(10,2) DEFAULT 0,
    observation TEXT DEFAULT NULL,
    created_at timestamp DEFAULT current_timestamp ,
    updated_at timestamp DEFAULT current_timestamp,
    FOREIGN KEY (user_id) REFERENCES users(id) 
);

INSERT INTO users ("name",is_admin,login,"password",work_regime,created_at,updated_at) VALUES
	 ('Usuario',1,'usuario','$2a$08$BpuuL5MEMKzfRPsgRj3/aOckBrbzSDTl2GAMe584TRynbIxjAG8xa',8,'2024-02-26 00:23:14.392','2024-02-29 00:20:14.392');
```

####  diagrama de entidade/relacionamento (DER)
![DER](https://raw.githubusercontent.com/EdsonCandido/gestao-jornada-api/main/der/der.png)

## Authors

* **Edson Cândido** - *Initial work* - [EdsonCandido](https://github.com/EdsonCandido).

## Libs usadas no projeto

* Express para montar o servidor http.
* Knex para conexão com o banco de dados.
* zod para validação e tipagens dos dados. 
* pino para debug e log de operações.
# Projeto Clone Spotify

Esse projeto foi desenvolvido com o objetivo de estudar a programação fullstack usando JavaScript, ReactJS e Express, sendo um projeto desenvolvido ao longo de 4 aulas e posteriormente incrementado com um método de busca mais eficiente.

## O Front-end

O front-end foi feito usando ReactJS, tendo uma prioridade na criação de componentes, organizando melhor a formatação das páginas em geral, instigando boas práticas de programação, otimização e organização de código.

## O Back-end

O back-end acabou sendo desenvolvido com o auxílio do express e mongoDB. Antes de ter uma base de dados no mongoDB, todos os dados estavam salvos na pasta database, então foi criado um arquivo para upar todos os dados de artistas e músicas para o banco de dados, assim possibilitando receber os dados dessa conexão ao invés de obtê-los localmente. A base de dados é recebida e o servidor é iniciado.

## A conexão Front-end + Back-end

A Api faz as requisições do back-end pelo front, sendo enviadas como arrays de objetos (artistas e músicas), sendo filtrado e mostrado apenas o necessário por componente em cada página.

### A busca de dados

O método de busca apresentado nas aulas de um artista ou música específica era feito de forma linear $O(n)$, então eu acabei implementando uma busca binária para poder encontrar de forma mais rápida $O(\log n)$.

O mongoDB utilizou uma combinação hexadecimal crescente para ser o ID dos artistas e das músicas, assim possibilitando essa busca binária utilizando a comparação de strings (ordem lexicográica) para encontrar os IDs desejados.

### As músicas

O banco de dados possui um total de 20 artistas, sendo que cada um deles **apresenta** 10 músicas, o que totalizaria um total de 200 músicas a serem armazenadas. Para evitar precisar baixar todas as 200 músicas foi feita uma filtragem de apenas 1 música por artista, sendo assim independente de qual música do artista $X$ você escolha, a música que será tocada será a mesma que tocaria se você tivesse escolhido a música $Y, Z $ ou $N$.

Isso acaba implicando em um pequeno problema com a barra de progresso de música, já que a progressão dela é baseada no tempo da música que foi selecionada, e não necessariamente do único áudio disponível daquele artista. Isso é:

- Você escolheu a música "Paredões", de Henrique & Juliano
- O único áudio de música existente de Henrique e Juliano no banco de dados é da música "Última Saudade"
- O tempo apresentado no player vai ser o da música selecionada, terminando em 02:55, porém o áudio disponível termina em 02:30, o que resulta em um intervalo onde a música já foi concluida, mas ainda assim a barra de progresso não chegou no final.

Esse problema poderia ser resolvido simplesmente tendo todos os áudios armazenados, mas por outros fatores (como armazenamento por exemplo) acabou não sendo possível.

## Deploy

O projeto teve seu deploy usando o Render em sua versão gratuita e pode ser acessado por esse [Link](https://clone-spotify-full-stack.onrender.com).

## Disclaimer

Este projeto é um clone do Spotify desenvolvido apenas para fins educacionais e sem qualquer intenção de lucro. Todas as imagens, áudios e outros conteúdos utilizados pertencem aos seus respectivos proprietários. Não reivindico nenhum direito sobre esses materiais. Se houver qualquer problema relacionado ao uso desses conteúdos, por favor, entre em contato para que possam ser removidos.

# Autor

Gabriel Alves de Freitas Spinola Sucupira

[![Linkedin](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/gabriel-spinola-a19470275/)

Emails:
\
spinolagab@gmail.com
\
gabriel.spinola.profissional@gmail.com
\
10418133@mackenzista.com.br

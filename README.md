<div id="top"></div>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
<!--
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url] -->

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <!-- <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a> -->

  <h3 align="center">MineSweeper Game API</h3>

  <p align="center">
    This is a rest api for creating a mineweeper game and play!
    <!-- <br />
    <a href="https://github.com/othneildrew/Best-README-Template"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/othneildrew/Best-README-Template">View Demo</a>
    ·
    <a href="https://github.com/othneildrew/Best-README-Template/issues">Report Bug</a>
    ·
    <a href="https://github.com/othneildrew/Best-README-Template/issues">Request Feature</a> -->
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Documentaion</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

This is a minesweeper rest api, it's a compitable version of minesweeper you can use it to build a new game and start interacting with it.

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

This section should list any major frameworks/libraries used to bootstrap your project.

- [Node](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [Joi](https://joi.dev/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [CicrleCI](https://circleci.com/)
- [Docker](https://www.docker.com//)

<p align="right">(<a href="#top">back to top</a>)</p>

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

- npm
  ```sh
  npm install npm@latest -g
  ```
- yarn
  ```sh
  npm install yarn -g
  ```

### Installation

_Below is an example of how you can install and setting up your app._

1. Clone the repo
   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```
2. Install NPM packages
   ```sh
   yarn
   ```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

_Below is an example of how you can start the server._

1. Clone the repo
   ```sh
   yarn run dev
   ```
   <p align="right">(<a href="#top">back to top</a>)</p>

## Documentation

This is a minesweeper rest api, it's a compitable version of minesweeper you can use it to build a new game and start interacting with it.

<p align="right">(<a href="#top">back to top</a>)</p>

1. Create new Game
   ```sh
    POST http://localhost:8080/api/v1/games
    body {
        rows: 2,
        columns: 2
    }
    response {
        "code": 201,
        "data": {
            "game": {
                "_id": "61c882dddcc47b1a51d333ba",
                "board": {
                    "cells": [
                        [
                            {
                                "__v": 0,
                                "_id": "61c882dddcc47b1a51d333b3",
                                "createdAt": "2021-12-26T14:57:33.807Z",
                                "hasMine": true,
                                "isRevealed": false,
                                "numberOfTouchedBombs": 0,
                                "place": [
                                    0,
                                    0
                                ],
                                "updatedAt": "2021-12-26T14:57:33.807Z"
                            },
                            {
                                "__v": 0,
                                "_id": "61c882dddcc47b1a51d333b4",
                                "createdAt": "2021-12-26T14:57:33.807Z",
                                "hasMine": false,
                                "isRevealed": false,
                                "numberOfTouchedBombs": 1,
                                "place": [
                                    0,
                                    1
                                ],
                                "updatedAt": "2021-12-26T14:57:33.807Z"
                            }
                        ],
                        [
                            {
                                "__v": 0,
                                "_id": "61c882dddcc47b1a51d333b5",
                                "createdAt": "2021-12-26T14:57:33.807Z",
                                "hasMine": false,
                                "isRevealed": false,
                                "numberOfTouchedBombs": 1,
                                "place": [
                                    1,
                                    0
                                ],
                                "updatedAt": "2021-12-26T14:57:33.807Z"
                            },
                            {
                                "__v": 0,
                                "_id": "61c882dddcc47b1a51d333b6",
                                "createdAt": "2021-12-26T14:57:33.807Z",
                                "hasMine": false,
                                "isRevealed": false,
                                "numberOfTouchedBombs": 1,
                                "place": [
                                    1,
                                    1
                                ],
                                "updatedAt": "2021-12-26T14:57:33.807Z"
                            }
                        ]
                    ],
                    "columns": 2,
                    "rows": 2
                },
                "statue": "CREATED"
            }
        },
        "message": "board created successfully!"
    }
   ```
2. List Games

   ```sh
    GET http://localhost:8080/api/v1/games
    response {
        "code": 200,
        "data": {
            "games": [
                {
                    "_id": "61c882dddcc47b1a51d333ba",
                    "board": {
                        "cells": [
                            [
                                {
                                    "__v": 0,
                                    "_id": "61c882dddcc47b1a51d333b3",
                                    "createdAt": "2021-12-26T14:57:33.807Z",
                                    "hasMine": true,
                                    "isRevealed": false,
                                    "numberOfTouchedBombs": 0,
                                    "place": [
                                        0,
                                        0
                                    ],
                                    "updatedAt": "2021-12-26T14:57:33.807Z"
                                },
                                {
                                    "__v": 0,
                                    "_id": "61c882dddcc47b1a51d333b4",
                                    "createdAt": "2021-12-26T14:57:33.807Z",
                                    "hasMine": false,
                                    "isRevealed": false,
                                    "numberOfTouchedBombs": 1,
                                    "place": [
                                        0,
                                        1
                                    ],
                                    "updatedAt": "2021-12-26T14:57:33.807Z"
                                }
                            ],
                            [
                                {
                                    "__v": 0,
                                    "_id": "61c882dddcc47b1a51d333b5",
                                    "createdAt": "2021-12-26T14:57:33.807Z",
                                    "hasMine": false,
                                    "isRevealed": false,
                                    "numberOfTouchedBombs": 1,
                                    "place": [
                                        1,
                                        0
                                    ],
                                    "updatedAt": "2021-12-26T14:57:33.807Z"
                                },
                                {
                                    "__v": 0,
                                    "_id": "61c882dddcc47b1a51d333b6",
                                    "createdAt": "2021-12-26T14:57:33.807Z",
                                    "hasMine": false,
                                    "isRevealed": false,
                                    "numberOfTouchedBombs": 1,
                                    "place": [
                                        1,
                                        1
                                    ],
                                    "updatedAt": "2021-12-26T14:57:33.807Z"
                                }
                            ]
                        ],
                        "columns": 2,
                        "rows": 2
                    },
                    "statue": "CREATED"
                }
            }
        ]
    }
   ```

3. Get Game By Id

   ```sh
    GET http://localhost:8080/api/v1/games/61c882dddcc47b1a51d333ba
    response {
        "code": 200,
        "data": {
            "game":
                {
                    "_id": "61c882dddcc47b1a51d333ba",
                    "board": {
                        "cells": [
                            [
                                {
                                    "__v": 0,
                                    "_id": "61c882dddcc47b1a51d333b3",
                                    "createdAt": "2021-12-26T14:57:33.807Z",
                                    "hasMine": true,
                                    "isRevealed": false,
                                    "numberOfTouchedBombs": 0,
                                    "place": [
                                        0,
                                        0
                                    ],
                                    "updatedAt": "2021-12-26T14:57:33.807Z"
                                },
                                {
                                    "__v": 0,
                                    "_id": "61c882dddcc47b1a51d333b4",
                                    "createdAt": "2021-12-26T14:57:33.807Z",
                                    "hasMine": false,
                                    "isRevealed": false,
                                    "numberOfTouchedBombs": 1,
                                    "place": [
                                        0,
                                        1
                                    ],
                                    "updatedAt": "2021-12-26T14:57:33.807Z"
                                }
                            ],
                            [
                                {
                                    "__v": 0,
                                    "_id": "61c882dddcc47b1a51d333b5",
                                    "createdAt": "2021-12-26T14:57:33.807Z",
                                    "hasMine": false,
                                    "isRevealed": false,
                                    "numberOfTouchedBombs": 1,
                                    "place": [
                                        1,
                                        0
                                    ],
                                    "updatedAt": "2021-12-26T14:57:33.807Z"
                                },
                                {
                                    "__v": 0,
                                    "_id": "61c882dddcc47b1a51d333b6",
                                    "createdAt": "2021-12-26T14:57:33.807Z",
                                    "hasMine": false,
                                    "isRevealed": false,
                                    "numberOfTouchedBombs": 1,
                                    "place": [
                                        1,
                                        1
                                    ],
                                    "updatedAt": "2021-12-26T14:57:33.807Z"
                                }
                            ]
                        ],
                        "columns": 2,
                        "rows": 2
                    },
                    "statue": "CREATED"
                }
            }
    }
   ```

4. Move Cell or Reveal it (this is how we play the game)

   ```sh
    PUT http://localhost:8080/api/v1/games/61c882dddcc47b1a51d333ba/move
    body {
        x: 0,
        y: 0
    }
    response {
        "code": 200,
        "data": {
            "game": {
                "_id": "61c882dddcc47b1a51d333ba",
                "board": {
                    "cells": [
                        [
                            {
                                "__v": 0,
                                "_id": "61c882dddcc47b1a51d333b3",
                                "createdAt": "2021-12-26T14:57:33.807Z",
                                "hasMine": true,
                                "isRevealed": true,
                                "numberOfTouchedBombs": 0,
                                "place": [
                                    0,
                                    0
                                ],
                                "updatedAt": "2021-12-26T14:57:33.807Z"
                            },
                            {
                                "__v": 0,
                                "_id": "61c882dddcc47b1a51d333b4",
                                "createdAt": "2021-12-26T14:57:33.807Z",
                                "hasMine": false,
                                "isRevealed": false,
                                "numberOfTouchedBombs": 1,
                                "place": [
                                    0,
                                    1
                                ],
                                "updatedAt": "2021-12-26T14:57:33.807Z"
                            }
                        ],
                        [
                            {
                                "__v": 0,
                                "_id": "61c882dddcc47b1a51d333b5",
                                "createdAt": "2021-12-26T14:57:33.807Z",
                                "hasMine": false,
                                "isRevealed": false,
                                "numberOfTouchedBombs": 1,
                                "place": [
                                    1,
                                    0
                                ],
                                "updatedAt": "2021-12-26T14:57:33.807Z"
                            },
                            {
                                "__v": 0,
                                "_id": "61c882dddcc47b1a51d333b6",
                                "createdAt": "2021-12-26T14:57:33.807Z",
                                "hasMine": false,
                                "isRevealed": false,
                                "numberOfTouchedBombs": 1,
                                "place": [
                                    1,
                                    1
                                ],
                                "updatedAt": "2021-12-26T14:57:33.807Z"
                            }
                        ]
                    ],
                    "columns": 2,
                    "rows": 2
                },
                "statue": "CREATED"
            }
        }
    }

    another reponse {
        code: 200,
        message: "Congratulations you wonned!",
    }

    another reponse {
        code: 200,
        message: "Congratulations you wonned!",
    }

    res.status(200).json({
        code: 200,
        message: `Game is over!`,
    });
   ```

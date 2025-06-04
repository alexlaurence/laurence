---
layout: page
title: family tree
permalink: /family-tree/
description: Tracing our ancestral roots and connections across generations
nav: true
nav_order: 2
---

# The Laurence Family Tree
Tracing our ancestral roots and connections across generations

---

  <div id="FamilyChart" class="f3" style="width:100%;height:900px;margin:auto;background-color:rgb(33,33,33);color:#fff;"></div>
  <link rel="stylesheet" href="https://unpkg.com/family-chart@0.4.5/dist/styles/family-chart.css">
  <script src="https://unpkg.com/d3@6"></script>
  <script type="module" src="https://unpkg.com/family-chart@0.4.5"></script>
  <script type="module">
    
    create(data())

    function create(data) {
      const f3Chart = f3.createChart('#FamilyChart', data)
        .setTransitionTime(1000)
        .setCardXSpacing(250)
        .setCardYSpacing(150)
        .setSingleParentEmptyCard(true, {label: 'ADD'})
        .setShowSiblingsOfMain(true)
        .setOrientationVertical()
        .setAncestryDepth(1)
        .setProgenyDepth(2)
    
      const f3Card = f3Chart.setCard(f3.CardHtml)
        .setCardDisplay([["first name","last name"],[]])
        .setCardDim({})
        .setMiniTree(true)
        .setStyle('rect')
        .setOnHoverPathToMain()
    }
    
    function data() {
      return [
        {
          "id": "0",
          "rels": {
            "spouses": [
              "8b576785-2654-47c0-b2cc-fe38f75d37c7"
            ],
            "children": [],
            "father": "ea7687c8-b5eb-4005-ba00-2e4da493c8ef",
            "mother": "dd0b5b8a-c07a-4bbe-a47b-4c94e9bf478b"
          },
          "data": {
            "first name": "Alexander Adam",
            "last name": "Laurence",
            "birthday": "1992",
            "avatar": "",
            "gender": "M"
          }
        },
        {
          "id": "8b576785-2654-47c0-b2cc-fe38f75d37c7",
          "data": {
            "gender": "F",
            "first name": "Rino",
            "last name": "Laurence",
            "birthday": "1996",
            "avatar": ""
          },
          "rels": {
            "spouses": [
              "0"
            ],
            "children": [],
            "father": "509c89bb-af8f-4315-a442-6315a24f0c8a",
            "mother": "2336140f-80ec-4b82-ba56-2896304c9091"
          }
        },
        {
          "id": "ea7687c8-b5eb-4005-ba00-2e4da493c8ef",
          "data": {
            "gender": "M",
            "first name": "Anoj",
            "last name": "Chhetri",
            "birthday": "",
            "avatar": ""
          },
          "rels": {
            "children": [
              "0",
              "d01cc846-8fa2-4bf8-936f-907b3a44d6d9"
            ],
            "spouses": [
              "dd0b5b8a-c07a-4bbe-a47b-4c94e9bf478b"
            ]
          }
        },
        {
          "id": "dd0b5b8a-c07a-4bbe-a47b-4c94e9bf478b",
          "data": {
            "gender": "F",
            "first name": "Rhea",
            "last name": "Basista",
            "birthday": "",
            "avatar": ""
          },
          "rels": {
            "children": [
              "0",
              "d01cc846-8fa2-4bf8-936f-907b3a44d6d9"
            ],
            "spouses": [
              "ea7687c8-b5eb-4005-ba00-2e4da493c8ef"
            ]
          }
        },
        {
          "id": "509c89bb-af8f-4315-a442-6315a24f0c8a",
          "data": {
            "gender": "M",
            "first name": "Katsuhiro",
            "last name": "Arai",
            "birthday": "",
            "avatar": ""
          },
          "rels": {
            "children": [
              "df82ee03-031c-4d5b-a5bd-552cf6f21731",
              "8b576785-2654-47c0-b2cc-fe38f75d37c7"
            ],
            "spouses": [
              "2336140f-80ec-4b82-ba56-2896304c9091"
            ]
          }
        },
        {
          "id": "2336140f-80ec-4b82-ba56-2896304c9091",
          "data": {
            "gender": "F",
            "first name": "Takako",
            "last name": "Morimoto (Inaguma)",
            "birthday": "",
            "avatar": ""
          },
          "rels": {
            "children": [
              "df82ee03-031c-4d5b-a5bd-552cf6f21731",
              "8b576785-2654-47c0-b2cc-fe38f75d37c7",
              "07e93ead-545a-43cd-a7a3-d96677c369cb"
            ],
            "spouses": [
              "509c89bb-af8f-4315-a442-6315a24f0c8a",
              "654fbdb3-f3a8-411a-8d45-f46401c43fda"
            ]
          }
        },
        {
          "id": "d01cc846-8fa2-4bf8-936f-907b3a44d6d9",
          "data": {
            "gender": "M",
            "first name": "Avishkar",
            "last name": "Chhetri",
            "birthday": "1994",
            "avatar": ""
          },
          "rels": {
            "father": "ea7687c8-b5eb-4005-ba00-2e4da493c8ef",
            "mother": "dd0b5b8a-c07a-4bbe-a47b-4c94e9bf478b"
          }
        },
        {
          "id": "df82ee03-031c-4d5b-a5bd-552cf6f21731",
          "data": {
            "gender": "M",
            "first name": "Hiroki",
            "last name": "Arai",
            "birthday": "",
            "avatar": ""
          },
          "rels": {
            "father": "509c89bb-af8f-4315-a442-6315a24f0c8a",
            "mother": "2336140f-80ec-4b82-ba56-2896304c9091",
            "children": [
              "8b3e2350-07b8-47ca-be8a-def4959497cf",
              "6fe7b90e-8d67-4197-a936-f392e6f5f6cb",
              "aeeb18fe-19fe-4268-9860-19ac2425c90d"
            ],
            "spouses": [
              "dd04e1cb-8903-4a97-b9bb-3d044c09604d"
            ]
          }
        },
        {
          "id": "654fbdb3-f3a8-411a-8d45-f46401c43fda",
          "data": {
            "gender": "M",
            "first name": "Masunobu",
            "last name": "Morimoto",
            "birthday": "",
            "avatar": ""
          },
          "rels": {
            "spouses": [
              "2336140f-80ec-4b82-ba56-2896304c9091"
            ],
            "children": [
              "07e93ead-545a-43cd-a7a3-d96677c369cb"
            ]
          }
        },
        {
          "id": "07e93ead-545a-43cd-a7a3-d96677c369cb",
          "data": {
            "gender": "M",
            "first name": "Kento",
            "last name": "Morimoto",
            "birthday": "",
            "avatar": ""
          },
          "rels": {
            "father": "654fbdb3-f3a8-411a-8d45-f46401c43fda",
            "mother": "2336140f-80ec-4b82-ba56-2896304c9091"
          }
        },
        {
          "id": "dd04e1cb-8903-4a97-b9bb-3d044c09604d",
          "data": {
            "gender": "F",
            "first name": "Yuki",
            "last name": "Arai",
            "birthday": "",
            "avatar": ""
          },
          "rels": {
            "spouses": [
              "df82ee03-031c-4d5b-a5bd-552cf6f21731"
            ],
            "children": [
              "8b3e2350-07b8-47ca-be8a-def4959497cf",
              "6fe7b90e-8d67-4197-a936-f392e6f5f6cb",
              "aeeb18fe-19fe-4268-9860-19ac2425c90d"
            ]
          }
        },
        {
          "id": "8b3e2350-07b8-47ca-be8a-def4959497cf",
          "data": {
            "gender": "M",
            "first name": "Hayato",
            "last name": "Arai",
            "birthday": "",
            "avatar": ""
          },
          "rels": {
            "father": "df82ee03-031c-4d5b-a5bd-552cf6f21731",
            "mother": "dd04e1cb-8903-4a97-b9bb-3d044c09604d",
            "children": [],
            "spouses": []
          }
        },
        {
          "id": "6fe7b90e-8d67-4197-a936-f392e6f5f6cb",
          "data": {
            "gender": "F",
            "first name": "Kii",
            "last name": "Arai",
            "birthday": "",
            "avatar": ""
          },
          "rels": {
            "mother": "dd04e1cb-8903-4a97-b9bb-3d044c09604d",
            "father": "df82ee03-031c-4d5b-a5bd-552cf6f21731",
            "children": [],
            "spouses": []
          }
        },
        {
          "id": "aeeb18fe-19fe-4268-9860-19ac2425c90d",
          "data": {
            "gender": "M",
            "first name": "Minato",
            "last name": "Arai",
            "birthday": "",
            "avatar": ""
          },
          "rels": {
            "father": "df82ee03-031c-4d5b-a5bd-552cf6f21731",
            "mother": "dd04e1cb-8903-4a97-b9bb-3d044c09604d"
          }
        }
      ]
    }

  </script>

---

## How to Contribute

Family members are encouraged to contribute to our genealogical records:

- **Share family documents** - Birth certificates, marriage records, and historical documents
- **Submit photographs** - Family portraits and candid photos from any era
- **Provide biographical information** - Stories, achievements, and memories of family members
- **Verify existing information** - Help us ensure accuracy in our records

## Research in Progress

We are actively researching our family history and collecting information from various sources:

- Official records and archives
- Family documents and photographs
- Oral histories from family members
- Cemetery records and memorials
- Historical newspapers and publications

---

*If you have information to contribute to our family tree or questions about our genealogy, please reach out to the archive maintainers.* 

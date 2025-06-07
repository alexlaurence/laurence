---
layout: page
title: Family Tree
permalink: /en/family-tree/
description: 
nav: true
nav_order: 3
lang: en
---

# The Laurence Family Tree
Tracing our ancestral roots and connections across generations

---

  <div id="FamilyChart" class="f3" style="width:100%;height:900px;margin:auto;background-color:rgb(33,33,33);color:#fff;"></div>
  <script src="https://unpkg.com/d3@6"></script>
  <script type="module" src="https://unpkg.com/family-chart@0.4.5"></script>
  <link rel="stylesheet" href="https://unpkg.com/family-chart@0.4.5/dist/styles/family-chart.css">
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
    
      f3Chart.updateTree({initial: true})
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

## How to Add Family Members to the Tree

The family tree data is stored directly in this page's JavaScript code. To add new family members, you'll need to edit the `data()` function in this file. Here's how:

### Understanding the Data Structure

Each family member is represented as an object with:
- **`id`**: A unique identifier (use a UUID generator or create a unique string)
- **`data`**: Personal information (name, birthday, gender, etc.)
- **`rels`**: Relationships (father, mother, spouses, children)

### Step-by-Step Instructions:

#### 1. **Adding a Child to Existing Parents**

To add a child to Alexander and Rino:

```javascript
// 1. Create the new child object
{
  "id": "new-child-uuid-here",
  "data": {
    "gender": "M", // or "F"
    "first name": "Child's First Name",
    "last name": "Laurence",
    "birthday": "2025",
    "avatar": ""
  },
  "rels": {
    "father": "0", // Alexander's ID
    "mother": "8b576785-2654-47c0-b2cc-fe38f75d37c7" // Rino's ID
  }
}

// 2. Add the child's ID to both parents' children arrays
// In Alexander's object (id: "0"):
"children": ["new-child-uuid-here"]

// In Rino's object (id: "8b576785-2654-47c0-b2cc-fe38f75d37c7"):
"children": ["new-child-uuid-here"]
```

#### 2. **Adding a Sibling**

To add a sibling to Alexander:

```javascript
// 1. Create the sibling object
{
  "id": "new-sibling-uuid-here",
  "data": {
    "gender": "F",
    "first name": "Sister's Name",
    "last name": "Chhetri",
    "birthday": "1990",
    "avatar": ""
  },
  "rels": {
    "father": "ea7687c8-b5eb-4005-ba00-2e4da493c8ef", // Same father as Alexander
    "mother": "dd0b5b8a-c07a-4bbe-a47b-4c94e9bf478b"  // Same mother as Alexander
  }
}

// 2. Add the sibling's ID to both parents' children arrays
// In father's object (id: "ea7687c8-b5eb-4005-ba00-2e4da493c8ef"):
"children": ["0", "d01cc846-8fa2-4bf8-936f-907b3a44d6d9", "new-sibling-uuid-here"]

// In mother's object (id: "dd0b5b8a-c07a-4bbe-a47b-4c94e9bf478b"):
"children": ["0", "d01cc846-8fa2-4bf8-936f-907b3a44d6d9", "new-sibling-uuid-here"]
```

#### 3. **Adding a Spouse/Partner**

To add a spouse to someone:

```javascript
// 1. Create the spouse object
{
  "id": "new-spouse-uuid-here",
  "data": {
    "gender": "F",
    "first name": "Spouse's Name",
    "last name": "Spouse's Last Name",
    "birthday": "1985",
    "avatar": ""
  },
  "rels": {
    "spouses": ["existing-person-id"],
    "children": [] // Add any children IDs here
  }
}

// 2. Add the spouse's ID to the existing person's spouses array
// In the existing person's object:
"spouses": ["new-spouse-uuid-here"]
```

#### 4. **Adding Parents to an Existing Person**

```javascript
// 1. Create the parent objects (father and mother)
{
  "id": "new-father-uuid-here",
  "data": {
    "gender": "M",
    "first name": "Father's Name",
    "last name": "Father's Last Name",
    "birthday": "1950",
    "avatar": ""
  },
  "rels": {
    "children": ["existing-person-id"],
    "spouses": ["new-mother-uuid-here"]
  }
}

// 2. Add the parent IDs to the existing person's object
// In the existing person's object:
"rels": {
  "father": "new-father-uuid-here",
  "mother": "new-mother-uuid-here",
  // ... other relationships
}
```

### Important Tips:

- **Generate Unique IDs**: Use an online UUID generator or create unique strings
- **Update All Relationships**: When adding someone, make sure to update all related people's relationship arrays
- **Test Locally**: Always test the family tree locally before pushing changes
- **Backup First**: Make a copy of the working data before making changes

### Common Relationship Patterns:

- **Children arrays**: `["child1-id", "child2-id", "child3-id"]`
- **Spouses arrays**: `["spouse1-id", "spouse2-id"]` (for multiple marriages)
- **Parent references**: `"father": "father-id"`, `"mother": "mother-id"`

---

## Research in Progress

We are actively researching our family history and collecting information from various sources:

- Official records and archives
- Family documents and photographs
- Oral histories from family members
- Cemetery records and memorials
- Historical newspapers and publications

---

*If you have information to contribute to our family tree or questions about our genealogy, please reach out to the archive maintainers.* 

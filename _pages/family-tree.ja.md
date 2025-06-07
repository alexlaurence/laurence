---
layout: page
title: 家系図
lang: ja
permalink: /ja/family-tree/
description: 
nav: true
nav_order: 2
---

# ローレンス家の家系図
世代を超えて私たちの祖先のルーツとつながりをたどります

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

## 家系図に家族メンバーを追加する方法

家系図のデータはこのページのJavaScriptコード内に直接保存されています。新しい家族メンバーを追加するには、このファイルの`data()`関数を編集する必要があります。方法は以下の通りです：

### データ構造の理解

各家族メンバーは以下のオブジェクトで表現されています：
- **`id`**: 一意の識別子（UUID生成器を使用するか、一意の文字列を作成）
- **`data`**: 個人情報（名前、誕生日、性別など）
- **`rels`**: 関係性（父、母、配偶者、子供）

### ステップバイステップの手順：

#### 1. **既存の親に子供を追加する**

アレクサンダーとリノに子供を追加する場合：

```javascript
// 1. 新しい子供オブジェクトを作成
{
  "id": "new-child-uuid-here",
  "data": {
    "gender": "M", // または "F"
    "first name": "子供の名前",
    "last name": "Laurence",
    "birthday": "2025",
    "avatar": ""
  },
  "rels": {
    "father": "0", // アレクサンダーのID
    "mother": "8b576785-2654-47c0-b2cc-fe38f75d37c7" // リノのID
  }
}

// 2. 両親の子供配列に子供のIDを追加
// アレクサンダーのオブジェクト（id: "0"）に：
"children": ["new-child-uuid-here"]

// リノのオブジェクト（id: "8b576785-2654-47c0-b2cc-fe38f75d37c7"）に：
"children": ["new-child-uuid-here"]
```

#### 2. **兄弟姉妹を追加する**

アレクサンダーに兄弟姉妹を追加する場合：

```javascript
// 1. 兄弟姉妹オブジェクトを作成
{
  "id": "new-sibling-uuid-here",
  "data": {
    "gender": "F",
    "first name": "姉妹の名前",
    "last name": "Chhetri",
    "birthday": "1990",
    "avatar": ""
  },
  "rels": {
    "father": "ea7687c8-b5eb-4005-ba00-2e4da493c8ef", // アレクサンダーと同じ父
    "mother": "dd0b5b8a-c07a-4bbe-a47b-4c94e9bf478b"  // アレクサンダーと同じ母
  }
}

// 2. 両親の子供配列に兄弟姉妹のIDを追加
// 父のオブジェクト（id: "ea7687c8-b5eb-4005-ba00-2e4da493c8ef"）に：
"children": ["0", "d01cc846-8fa2-4bf8-936f-907b3a44d6d9", "new-sibling-uuid-here"]

// 母のオブジェクト（id: "dd0b5b8a-c07a-4bbe-a47b-4c94e9bf478b"）に：
"children": ["0", "d01cc846-8fa2-4bf8-936f-907b3a44d6d9", "new-sibling-uuid-here"]
```

#### 3. **配偶者・パートナーを追加する**

誰かに配偶者を追加する場合：

```javascript
// 1. 配偶者オブジェクトを作成
{
  "id": "new-spouse-uuid-here",
  "data": {
    "gender": "F",
    "first name": "配偶者の名前",
    "last name": "配偶者の姓",
    "birthday": "1985",
    "avatar": ""
  },
  "rels": {
    "spouses": ["existing-person-id"],
    "children": [] // 子供のIDがあればここに追加
  }
}

// 2. 既存の人の配偶者配列に配偶者のIDを追加
// 既存の人のオブジェクトに：
"spouses": ["new-spouse-uuid-here"]
```

#### 4. **既存の人に親を追加する**

```javascript
// 1. 親オブジェクト（父と母）を作成
{
  "id": "new-father-uuid-here",
  "data": {
    "gender": "M",
    "first name": "父の名前",
    "last name": "父の姓",
    "birthday": "1950",
    "avatar": ""
  },
  "rels": {
    "children": ["existing-person-id"],
    "spouses": ["new-mother-uuid-here"]
  }
}

// 2. 既存の人のオブジェクトに親のIDを追加
// 既存の人のオブジェクトに：
"rels": {
  "father": "new-father-uuid-here",
  "mother": "new-mother-uuid-here",
  // ... その他の関係性
}
```

### 重要なヒント：

- **一意のIDを生成**: オンラインUUID生成器を使用するか、一意の文字列を作成
- **すべての関係性を更新**: 誰かを追加する際は、関連するすべての人の関係配列を更新
- **ローカルでテスト**: 変更をプッシュする前に必ずローカルで家系図をテスト
- **バックアップを作成**: 変更前に動作するデータのコピーを作成

### 一般的な関係性パターン：

- **子供の配列**: `["child1-id", "child2-id", "child3-id"]`
- **配偶者の配列**: `["spouse1-id", "spouse2-id"]`（複数の結婚の場合）
- **親の参照**: `"father": "father-id"`, `"mother": "mother-id"`

---

## 進行中の研究

私たちは様々な情報源から家族の歴史を積極的に研究し、情報を収集しています：

- 公式記録とアーカイブ
- 家族の文書と写真
- 家族メンバーからの口述歴史
- 墓地記録と記念碑
- 歴史的新聞と出版物

---

*家系図に貢献する情報がある場合や系譜に関する質問がある場合は、アーカイブ管理者にお問い合わせください。* 
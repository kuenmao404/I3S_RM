### 架構
src/components/
├── App.jsx                # 根組件
├── Main.jsx              # 主要布局組件
│
├── header/               # 頭部組件
│   ├── index.jsx
│   └── LoginStateAvator.jsx
│
├── content/              # 內容區組件
│   ├── index.jsx        # 內容路由
│   └── home/            # 首頁組件
│       ├── index.jsx    # 首頁主組件
│       └── FeatureCard.jsx # 特性卡片組件
│
├── sidebar/             # 側邊欄組件
│   └── index.jsx
│
├── footer/              # 頁尾組件
│   └── index.jsx
│
├── elements/            # 共用元件
│   ├── alert/          # 提示框
│   │   └── Alert.jsx
│   ├── dialog/         # 對話框
│   │   ├── Dialog.jsx
│   │   ├── Login.jsx
│   │   └── formitem/
│   │       └── SSOButton.jsx
│   ├── snackbar/       # 消息提示
│   │   └── Snackbar.jsx
│   ├── wrapper/        # 包裝組件
│   │   ├── LoadingWrapper.jsx 
│   │   └── RwdWrapper.jsx
│   └── Loading.jsx     # 載入中組件
│
└── ui/                  # UI 組件
    ├── Avatar.jsx      # 頭像
    ├── ListItem.jsx    # 列表項
    ├── Loading.jsx     # 載入指示器
    └── index.jsx       # UI組件導出
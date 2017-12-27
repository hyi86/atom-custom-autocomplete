## 사전설정

### 필수 추가모듈 설치
Atom 사용시 코딩에 도움을 주는 모듈들을 설치한다.

  - __aligner__  
    세로 라인을 정렬해주는 모듈.
  - __aligner-javascript__  
    세로 라인을 정렬해주는 모듈.(Aligner Add-on)
  - __autocomplete-modules__  
    Javascript(Node.js, Typescript ...) 사용시, Path 를 자동으로 찾아주는 모듈.
  - __chary-tree-view__  
    Tree view에서 더블 클릭 시에만 파일을 열도록 해주는 모듈.
  - __emmet__  
    젠코딩(Zencoding) 자동완성 모듈
  - __file-icons__  
    파일 아이콘 모음
  - __highlight-selected__  
    텍스트 에디터에서 선택 시, 자동으로 같은 단어를 찾아 선택해주는 모듈.
  - __language-apache__  
    Apache HTTPD 문법/자동완성 모듈.
  - __language-babel__  
    Babel, ES6/7 문법/자동완성 모듈.
  - __minimap__  
    Atom 미니맵.
  - __minimap-highlight-selected__  
    미니맵에서 문장 선택시에 자동으로 같은 단어를 찾아 표시해 주는 모듈.(Minimap Add-on)
  - __sort-lines__  
    텍스트 에디터에서 `F5`를 누르면 Text가 정렬되도록 해주는 모듈.

    ```sh
    apm install autocomplete-modules chary-tree-view emmet file-icons highlight-selected \
    language-apache language-babel minimap minimap-highlight-selected sort-lines
    ```

### 설정파일 변경
  에디터에서 `File > Config...`에서 다음의 항목들을 수정.

```cson
"*":
  "chary-tree-view":
    "dirSingleClick": false
  "core":
    "packagesWithKeymapsDisabled": ["emmet"]
    "telemetryConsent": "no"
  "editor":
    "fontFamily": "D2Coding"
    "fontSize": 15
    "scrollPastEnd": true
    "showIndentGuide": true
    "softWrap": true
  "file-icons":
    "coloured": false
  "minimap":
    "plugins":
      "highlight-selected": true
      "highlight-selectedDecorationsZIndex": 0
  "welcome":
    "showOnStartup": false
```

### Keymap 변경
에디터에서 `File > Keymap...`에서 다음의 항목들을 추가.

```cson
"body":
  "ctrl-shift-up": "editor:add-selection-above"
  "ctrl-shift-down": "editor:add-selection-below"
"atom-text-editor:not([mini])":
  "ctrl-e": "emmet:expand-abbreviation"
  "ctrl-h": "emmet:evaluate-math-expression"
```

---

## 커스텀 자동완성

### 커스텀 자동완성 설치/삭제

  ```sh
  # 프로젝트를 복사
  git clone https://github.com/yongilhong/atom-custom-autocomplete.git

  # 패키지 로컬 설치
  cd [atom-custom-autocomplete ROOT]
  apm link

  # 패키지 삭제
  cd [atom-custom-autocomplete ROOT]
  apm unlink
  ```

### 참조 목록
  - 참조1: [MDN Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
  - 참조1: [공식 API](https://github.com/atom/autocomplete-plus/wiki/Provider-API)
  - 참조2: [보일러플레이트](http://codersblock.com/blog/creating-an-autocomplete-plug-in-for-atom/)

### 필수 단축키

  - `Ctrl-Shift-F5`: 에디터 새로고침
  - `Ctrl-Shift-I`: 개발자 도구 열기

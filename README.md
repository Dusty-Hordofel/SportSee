# SPORTSEE

## Section 1: Project folder Structure

### 1. Create Project

- create `Soprtsee` Project using [vitejs](https://vitejs.dev/).

```bash
npm create vite@latest sportsee
```

- install dependencies

```bash
$ npm i axios react-query sass react-router-dom classnames lucide-react
```

- add `mocked data` in [mockedData](src/data/mockedData.js)

## Section 2: Compononents

### 2. Icons

- create [Icons](src/components/Icons.jsx)

```jsx
export const Icons = {
  calories: (props) => (
    <svg
      {...props}
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect opacity="0.066125" width="60" height="60" rx="6" fill="#FF0000" />
      <path
        d="M31.905 28.8663C31.905 28.8663 32.8375 23.3812 29.0325 21C28.9178 22.9061 27.9968 24.6731 26.5 25.8587C24.875 27.2875 21.8187 30.5 21.8512 33.925C21.8274 36.9116 23.4991 39.6534 26.165 41C26.2593 39.6645 26.8874 38.4233 27.9075 37.5562C28.7719 36.8915 29.333 35.9074 29.465 34.825C31.7407 36.0348 33.2125 38.3521 33.34 40.9263V40.9425C35.8552 39.7904 37.5109 37.3241 37.625 34.56C37.895 31.3425 36.1325 26.9675 34.5687 25.5375C33.9784 26.8556 33.0615 28.0013 31.905 28.8663Z"
        fill="#FF0000"
      />
    </svg>
  ),
  carbs: (props) => (
    <svg
      {...props}
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect opacity="0.101652" width="60" height="60" rx="6" fill="#F9CE23" />
      <path
        d="M37.6575 35.1C37.225 36.0575 37.0187 36.485 36.4612 37.3313C35.685 38.5125 34.5912 39.985 33.235 39.9975C32.03 40.0088 31.72 39.2138 30.085 39.2225C28.45 39.2313 28.1075 40.0113 26.9025 40C25.5462 39.9875 24.51 38.6588 23.7325 37.4763C21.5625 34.1713 21.335 30.2938 22.6737 28.2325C23.625 26.7663 25.1262 25.91 26.5387 25.91C27.9762 25.91 28.8787 26.6975 30.0675 26.6975C31.22 26.6975 31.9225 25.9088 33.585 25.9088C34.8412 25.9088 36.1725 26.5925 37.12 27.7738C34.0137 29.4775 34.5187 33.9138 37.6575 35.1Z"
        fill="#FDCC0C"
      />
      <path
        d="M22.8428 35.1C23.2753 36.0575 23.4816 36.485 24.0391 37.3313C24.8153 38.5125 25.9091 39.985 27.2653 39.9975C28.4703 40.0088 28.7803 39.2138 30.4153 39.2225C32.0503 39.2313 32.3928 40.0113 33.5978 40C34.9541 39.9875 35.9903 38.6588 36.7678 37.4763C38.9378 34.1713 39.1653 30.2938 37.8266 28.2325C36.8753 26.7663 35.3741 25.91 33.9616 25.91C32.5241 25.91 31.6216 26.6975 30.4328 26.6975C29.2803 26.6975 28.5778 25.9088 26.9153 25.9088C25.6591 25.9088 24.3278 26.5925 23.3803 27.7738C26.4866 29.4775 25.9816 33.9138 22.8428 35.1Z"
        fill="#FDCC0C"
      />
      <path
        d="M33.005 23.3737C33.6875 22.4987 34.205 21.2625 34.0162 20C32.9025 20.0763 31.6 20.785 30.8387 21.7088C30.1487 22.5475 29.5787 23.7912 29.8 25C31.0162 25.0375 32.2737 24.3112 33.005 23.3737Z"
        fill="#FDCC0C"
      />
    </svg>
  ),
  fat: (props) => (
    <svg
      {...props}
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="60" height="60" rx="6" fill="#FD5181" fill-opacity="0.1" />
      <path
        d="M21.25 36C21.25 38.125 22.875 39.75 25 39.75H35C37.125 39.75 38.75 38.125 38.75 36H21.25Z"
        fill="#FD5181"
      />
      <path
        d="M38.75 33.5H21.25C20.5 33.5 20 33 20 32.25C20 31.5 20.5 31 21.25 31H38.75C39.5 31 40 31.5 40 32.25C40 33 39.5 33.5 38.75 33.5Z"
        fill="#FD5181"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M31.25 21H28.75C24.625 21 21.25 24.375 21.25 28.5H38.75C38.75 24.375 35.375 21 31.25 21ZM27.5 26C26.75 26 26.25 25.5 26.25 24.75C26.25 24 26.75 23.5 27.5 23.5C28.25 23.5 28.75 24 28.75 24.75C28.75 25.5 28.25 26 27.5 26ZM32.5 26C32.5 26.75 33 27.25 33.75 27.25C34.5 27.25 35 26.75 35 26C35 25.25 34.5 24.75 33.75 24.75C33 24.75 32.5 25.25 32.5 26Z"
        fill="#FD5181"
      />
    </svg>
  ),
  bike: (props) => (
    <svg
      {...props}
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="64" height="64" rx="6" fill="white" />
      <path
        d="M37.1951 22.2439C38.9122 22.2439 40.3171 20.839 40.3171 19.122C40.3171 17.4049 38.9122 16 37.1951 16C35.478 16 34.0732 17.4049 34.0732 19.122C34.0732 20.839 35.478 22.2439 37.1951 22.2439ZM20.8049 32.3902C16.4341 32.3902 13 35.8244 13 40.1951C13 44.5659 16.4341 48 20.8049 48C25.1756 48 28.6098 44.5659 28.6098 40.1951C28.6098 35.8244 25.1756 32.3902 20.8049 32.3902ZM20.8049 45.6585C17.839 45.6585 15.3415 43.161 15.3415 40.1951C15.3415 37.2293 17.839 34.7317 20.8049 34.7317C23.7707 34.7317 26.2683 37.2293 26.2683 40.1951C26.2683 43.161 23.7707 45.6585 20.8049 45.6585ZM29.8585 30.0488L33.6049 26.3024L34.8537 27.5512C36.8829 29.5805 39.5366 30.8293 42.8146 30.8293V27.7073C40.4732 27.7073 38.6 26.7707 37.1951 25.3659L34.2293 22.4C33.4488 21.7756 32.6683 21.4634 31.7317 21.4634C30.7951 21.4634 30.0146 21.7756 29.5463 22.4L25.1756 26.7707C24.5512 27.3951 24.239 28.1756 24.239 28.9561C24.239 29.8927 24.5512 30.6732 25.1756 31.1415L30.1707 35.5122V43.3171H33.2927V33.639L29.8585 30.0488ZM42.6585 32.3902C38.2878 32.3902 34.8537 35.8244 34.8537 40.1951C34.8537 44.5659 38.2878 48 42.6585 48C47.0293 48 50.4634 44.5659 50.4634 40.1951C50.4634 35.8244 47.0293 32.3902 42.6585 32.3902ZM42.6585 45.6585C39.6927 45.6585 37.1951 43.161 37.1951 40.1951C37.1951 37.2293 39.6927 34.7317 42.6585 34.7317C45.6244 34.7317 48.1219 37.2293 48.1219 40.1951C48.1219 43.161 45.6244 45.6585 42.6585 45.6585Z"
        fill="#FF0101"
      />
    </svg>
  ),
  clap: (props) => (
    <svg
      {...props}
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="64" height="64" rx="6" fill="white" />
      <path
        d="M45.712 36.576L48 34.288L45.712 32L40 37.712L26.288 24L32 18.288L29.712 16L27.424 18.288L25.136 16L21.712 19.424L19.424 17.136L17.136 19.424L19.424 21.712L16 25.136L18.288 27.424L16 29.712L18.288 32L24 26.288L37.712 40L32 45.712L34.288 48L36.576 45.712L38.864 48L42.288 44.576L44.576 46.864L46.864 44.576L44.576 42.288L48 38.864L45.712 36.576Z"
        fill="#FF0101"
      />
    </svg>
  ),
  fitness: (props) => (
    <svg
      {...props}
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="64" height="64" rx="6" fill="white" />
      <path
        d="M45.712 36.576L48 34.288L45.712 32L40 37.712L26.288 24L32 18.288L29.712 16L27.424 18.288L25.136 16L21.712 19.424L19.424 17.136L17.136 19.424L19.424 21.712L16 25.136L18.288 27.424L16 29.712L18.288 32L24 26.288L37.712 40L32 45.712L34.288 48L36.576 45.712L38.864 48L42.288 44.576L44.576 46.864L46.864 44.576L44.576 42.288L48 38.864L45.712 36.576Z"
        fill="#FF0101"
      />
    </svg>
  ),
  swim: (props) => (
    <svg
      {...props}
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="64" height="64" rx="6" fill="white" />
      <path
        d="M29.3334 26.6666L25 31C25.4134 31.16 25.7467 31.36 26.0267 31.52C26.52 31.8266 26.8134 32 27.56 32C28.3067 32 28.6 31.8266 29.0934 31.52C29.7067 31.16 30.5334 30.6666 32.0134 30.6666C33.4934 30.6666 34.32 31.16 34.92 31.52C35.4134 31.8133 35.72 32 36.4534 32C37.1867 32 37.4934 31.8266 37.9867 31.52C38.1467 31.4266 38.3334 31.32 38.5334 31.2133L29.9734 22.6666C27.9067 20.6 26 19.9866 22.6667 20V23.3333C25.0934 23.32 26.52 23.8533 28 25.3333L29.3334 26.6666ZM45.3334 38H45.3067H45.3334ZM23.1334 36.6666C23.8667 36.6666 24.1734 36.8533 24.6667 37.1466C25.2667 37.5066 26.0934 38 27.5734 38C29.0534 38 29.88 37.5066 30.48 37.1466C30.9734 36.84 31.2667 36.6666 32.0134 36.6666C32.7467 36.6666 33.0534 36.8533 33.5467 37.1466C34.1467 37.5066 34.9734 38 36.4534 38C37.9334 38 38.76 37.5066 39.36 37.1466C39.8534 36.84 40.1467 36.6666 40.8934 36.6666C41.6267 36.6666 41.9334 36.8533 42.4267 37.1466C43.0267 37.5066 43.84 37.9866 45.3067 38V35.3333C44.5734 35.3333 44.2667 35.1466 43.7734 34.8533C43.1734 34.4933 42.3467 34 40.8667 34C39.3867 34 38.56 34.4933 37.96 34.8533C37.4667 35.16 37.16 35.3333 36.4267 35.3333C35.6934 35.3333 35.3867 35.1466 34.8934 34.8533C34.2934 34.4933 33.4667 34 31.9867 34C30.5067 34 29.68 34.4933 29.08 34.8533C28.5867 35.16 28.2934 35.3333 27.5467 35.3333C26.8134 35.3333 26.5067 35.1466 26.0134 34.8533C25.4134 34.4933 24.5867 34 23.1067 34C21.6267 34 20.8 34.4933 20.2 34.8533C19.7067 35.16 19.4134 35.3333 18.6667 35.3333V38C20.1467 38 20.9734 37.5066 21.6 37.1466C22.0934 36.84 22.4 36.6666 23.1334 36.6666ZM40.8934 40C39.4134 40 38.5867 40.4933 37.9867 40.8533C37.4934 41.16 37.1867 41.3333 36.4534 41.3333C35.72 41.3333 35.4134 41.1466 34.92 40.8533C34.32 40.4933 33.4934 40 32.0134 40C30.5334 40 29.7067 40.4933 29.0934 40.8533C28.6 41.16 28.3067 41.3333 27.56 41.3333C26.8134 41.3333 26.52 41.16 26.0267 40.8533C25.4267 40.4933 24.6 40 23.12 40C21.64 40 20.8134 40.4933 20.2 40.8533C19.7067 41.16 19.4134 41.3333 18.6667 41.3333V44C20.1467 44 20.9734 43.5066 21.5867 43.1466C22.08 42.84 22.3867 42.6666 23.12 42.6666C23.8534 42.6666 24.16 42.84 24.6534 43.1466C25.2534 43.5066 26.08 44 27.56 44C29.04 44 29.8667 43.5066 30.48 43.1466C30.9734 42.84 31.2667 42.6666 32.0134 42.6666C32.7467 42.6666 33.0534 42.8533 33.5467 43.1466C34.1467 43.5066 34.9734 44 36.4534 44C37.9334 44 38.7467 43.5066 39.36 43.1466C39.8534 42.84 40.1467 42.6666 40.8934 42.6666C41.6267 42.6666 41.9334 42.8533 42.4267 43.1466C43.0267 43.5066 43.8534 44 45.3334 44V41.3333C44.5867 41.3333 44.2934 41.16 43.8 40.8533C43.2 40.4933 42.3734 40 40.8934 40Z"
        fill="#FF0101"
      />
      <path
        d="M38 26.6667C39.841 26.6667 41.3334 25.1743 41.3334 23.3333C41.3334 21.4924 39.841 20 38 20C36.1591 20 34.6667 21.4924 34.6667 23.3333C34.6667 25.1743 36.1591 26.6667 38 26.6667Z"
        fill="#FF0101"
      />
    </svg>
  ),
  yoga: (props) => (
    <svg
      {...props}
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="64" height="64" rx="6" fill="white" />
      <path
        d="M32 22C34.2091 22 36 20.2091 36 18C36 15.7909 34.2091 14 32 14C29.7909 14 28 15.7909 28 18C28 20.2091 29.7909 22 32 22Z"
        fill="#FF0101"
      />
      <path
        d="M50 38V34C45.52 34 41.68 32.08 38.8 28.64L36.12 25.44C35.36 24.52 34.24 24 33.06 24H30.96C29.78 24 28.66 24.52 27.9 25.44L25.22 28.64C22.32 32.08 18.48 34 14 34V38C19.54 38 24.38 35.66 28 31.5V36L20.24 39.1C18.9 39.64 18 40.96 18 42.42C18 44.4 19.6 46 21.58 46H26V45C26 42.24 28.24 40 31 40H37C37.56 40 38 40.44 38 41C38 41.56 37.56 42 37 42H31C29.34 42 28 43.34 28 45V46H42.42C44.4 46 46 44.4 46 42.42C46 40.96 45.1 39.64 43.76 39.1L36 36V31.5C39.62 35.66 44.46 38 50 38Z"
        fill="#FF0101"
      />
    </svg>
  ),
  logo: (props) => (
    <svg
      {...props}
      width="178"
      height="61"
      viewBox="0 0 178 61"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M72.2811 38.553C71.1498 38.0458 70.3327 37.2848 69.7041 36.3337C69.0756 35.3826 68.7613 34.3046 68.6985 33.0364H71.6526C71.7154 34.1144 72.2183 35.0021 72.9725 35.6996C73.7267 36.3971 74.8581 36.7142 76.1151 36.7142C77.2465 36.7142 78.1264 36.4605 78.8178 36.0166C79.5092 35.5094 79.8863 34.8753 79.8863 33.9875C79.8863 33.3534 79.6978 32.8462 79.3207 32.4657C78.9435 32.0853 78.4407 31.8316 77.8122 31.6414C77.1837 31.4512 76.2409 31.2609 75.0466 31.0073H74.9209C73.7896 30.8171 72.7839 30.5634 71.9668 30.183C71.1498 29.8025 70.4584 29.2952 69.8927 28.5977C69.3899 27.9002 69.1385 26.9491 69.1385 25.8077C69.1385 24.7297 69.3899 23.7786 69.9555 22.9543C70.5212 22.13 71.2755 21.4959 72.2811 20.9886C73.2868 20.5447 74.4181 20.2911 75.6752 20.2911C76.9951 20.2911 78.1893 20.5447 79.1949 21.052C80.2635 21.5593 81.0805 22.1934 81.6462 23.0811C82.2747 23.9688 82.589 24.9834 82.589 26.0613H79.6349C79.5092 25.1102 79.0692 24.3493 78.3779 23.7786C77.6865 23.2079 76.7437 22.8909 75.6752 22.8909C74.6067 22.8909 73.7267 23.1445 73.0982 23.5884C72.4697 24.0322 72.1554 24.7297 72.1554 25.5541C72.1554 26.1882 72.344 26.632 72.7211 27.0125C73.0982 27.3295 73.601 27.6466 74.2296 27.8368C74.8581 28.027 75.738 28.2173 76.9322 28.4709C78.1264 28.6611 79.1321 28.9782 80.012 29.2952C80.892 29.6123 81.5834 30.183 82.149 30.8805C82.7147 31.578 82.9661 32.5291 82.9661 33.6705C82.9661 34.7485 82.6519 35.6996 82.0862 36.5873C81.5205 37.4751 80.7034 38.1092 79.6349 38.6164C78.5664 39.1237 77.4351 39.3139 76.1151 39.3139C74.6695 39.3774 73.3496 39.1237 72.2811 38.553Z"
        fill="#E60000"
      />
      <path
        d="M95.851 26.2516C96.7938 26.8222 97.548 27.5832 98.1137 28.6611C98.6794 29.7391 98.9308 30.9439 98.9308 32.4023C98.9308 33.7973 98.6794 35.0021 98.1137 36.0166C97.548 37.0946 96.7938 37.9189 95.851 38.4896C94.9082 39.0603 93.7769 39.3773 92.5826 39.3773C91.3884 39.3773 90.3828 39.1237 89.5657 38.6164C88.7486 38.1092 88.1829 37.4116 87.743 36.5873L88.1201 35.9532V44.5769H85.2917V25.6175H87.743L88.3086 28.9782L87.6801 28.3441C88.1829 27.5198 88.8115 26.8222 89.5657 26.2516C90.3828 25.7443 91.3256 25.4906 92.5198 25.4906C93.7768 25.4272 94.8454 25.7443 95.851 26.2516ZM90.0057 28.4075C89.3771 28.7879 88.9372 29.2952 88.6229 29.9927C88.3086 30.6902 88.1201 31.4511 88.1201 32.3389C88.1201 33.2266 88.3086 34.0509 88.6229 34.7484C88.9372 35.4459 89.44 35.9532 90.0057 36.3971C90.6342 36.7775 91.2627 36.9678 92.0798 36.9678C92.8341 36.9678 93.5254 36.7775 94.154 36.3971C94.7825 36.0166 95.2225 35.4459 95.5367 34.8119C95.851 34.1143 96.0396 33.3534 96.0396 32.4657C96.0396 31.578 95.851 30.817 95.5367 30.1195C95.2225 29.422 94.7825 28.9148 94.154 28.5343C93.5254 28.1538 92.8341 27.9636 92.0798 27.9636C91.2627 27.8368 90.5713 28.027 90.0057 28.4075Z"
        fill="#E60000"
      />
      <path
        d="M104.022 38.4896C102.953 37.9189 102.136 37.0946 101.571 36.0166C101.005 34.9387 100.691 33.7339 100.691 32.4023C100.691 31.0073 101.005 29.8025 101.571 28.7245C102.136 27.6466 102.953 26.8857 104.022 26.315C105.09 25.7443 106.285 25.4272 107.605 25.4272C108.987 25.4272 110.182 25.7443 111.187 26.315C112.256 26.8857 113.073 27.71 113.638 28.7245C114.204 29.8025 114.518 31.0073 114.518 32.4023C114.518 33.7973 114.204 35.0021 113.638 36.0801C113.073 37.158 112.256 37.9189 111.187 38.553C110.119 39.1237 108.924 39.4408 107.605 39.4408C106.222 39.3773 105.028 39.0603 104.022 38.4896ZM109.679 36.3337C110.307 35.9532 110.747 35.446 111.061 34.7485C111.376 34.0509 111.564 33.29 111.564 32.4023C111.564 31.5146 111.376 30.7537 111.061 30.0561C110.747 29.3586 110.307 28.8514 109.679 28.4709C109.05 28.0904 108.359 27.9002 107.605 27.9002C106.85 27.9002 106.096 28.0904 105.53 28.4709C104.902 28.8514 104.462 29.3586 104.148 30.0561C103.833 30.7537 103.645 31.5146 103.645 32.4023C103.645 33.29 103.833 34.0509 104.148 34.7485C104.462 35.446 104.965 35.9532 105.53 36.3337C106.159 36.7141 106.85 36.9044 107.605 36.9044C108.359 36.9044 109.113 36.7141 109.679 36.3337Z"
        fill="#E60000"
      />
      <path
        d="M119.295 25.6175L119.798 28.9782L119.232 28.3441C119.61 27.5198 120.175 26.8223 120.804 26.3784C121.432 25.8711 122.375 25.6809 123.569 25.6809H124.198V28.3441H122.941C121.747 28.3441 120.929 28.7246 120.364 29.4855C119.861 30.2464 119.547 31.2609 119.547 32.4657V39.314H116.718V25.6175H119.295Z"
        fill="#E60000"
      />
      <path
        d="M126.083 21.7495H128.912V25.5541H132.18V28.0271H128.912V35.1289C128.912 35.6996 129.037 36.0801 129.226 36.2703C129.415 36.5239 129.792 36.5874 130.295 36.5874H132.494V39.1237H129.729C128.472 39.1237 127.529 38.8067 126.963 38.236C126.398 37.6653 126.083 36.7142 126.083 35.446V21.7495Z"
        fill="#E60000"
      />
      <path
        d="M137.208 38.553C136.077 38.0458 135.26 37.2848 134.631 36.3337C134.003 35.3826 133.689 34.3046 133.626 33.0364H136.58C136.643 34.1144 137.145 35.0021 137.9 35.6996C138.654 36.3971 139.785 36.7142 141.042 36.7142C142.174 36.7142 143.054 36.4605 143.745 36.0166C144.436 35.5094 144.814 34.8753 144.814 33.9875C144.814 33.3534 144.625 32.8462 144.248 32.4657C143.871 32.0853 143.368 31.8316 142.739 31.6414C142.111 31.4512 141.168 31.2609 139.974 31.0073H139.848C138.717 30.8171 137.711 30.5634 136.894 30.183C136.077 29.8025 135.386 29.2952 134.82 28.5977C134.317 27.9002 134.066 26.9491 134.066 25.8077C134.066 24.7297 134.317 23.7786 134.883 22.9543C135.448 22.13 136.203 21.4959 137.208 20.9886C138.214 20.5447 139.345 20.2911 140.602 20.2911C141.922 20.2911 143.117 20.5447 144.122 21.052C145.191 21.5593 146.008 22.1934 146.573 23.0811C147.202 23.9688 147.516 24.9834 147.516 26.0613H144.562C144.436 25.1102 143.996 24.3493 143.305 23.7786C142.614 23.2079 141.671 22.8909 140.602 22.8909C139.534 22.8909 138.654 23.1445 138.025 23.5884C137.397 24.0322 137.083 24.7297 137.083 25.5541C137.083 26.1882 137.271 26.632 137.648 27.0125C138.025 27.3295 138.528 27.6466 139.157 27.8368C139.785 28.027 140.665 28.2173 141.859 28.4709C143.054 28.6611 144.059 28.9782 144.939 29.2952C145.819 29.6123 146.511 30.183 147.076 30.8805C147.642 31.578 147.893 32.5291 147.893 33.6705C147.893 34.7485 147.579 35.6996 147.013 36.5873C146.448 37.4751 145.631 38.1092 144.562 38.6164C143.494 39.1237 142.362 39.3139 141.042 39.3139C139.597 39.3774 138.34 39.1237 137.208 38.553Z"
        fill="#E60000"
      />
      <path
        d="M153.047 38.4896C151.979 37.9189 151.162 37.0946 150.596 36.0801C150.03 35.0021 149.716 33.7973 149.716 32.4023C149.716 31.0073 149.968 29.7391 150.533 28.7245C151.099 27.71 151.853 26.8857 152.859 26.315C153.864 25.7443 154.996 25.4272 156.316 25.4272C157.636 25.4272 158.767 25.6809 159.773 26.1882C160.778 26.6954 161.533 27.4564 162.098 28.4709C162.664 29.4855 162.978 30.6268 162.978 31.895C162.978 32.0853 162.978 32.2121 162.978 32.4023C162.978 32.5925 162.978 32.7828 162.915 32.973H152.733C152.733 33.0364 152.733 33.0364 152.733 33.0364V33.0998C152.796 33.8607 152.922 34.5582 153.236 35.1289C153.55 35.6996 153.99 36.1435 154.556 36.4605C155.121 36.7776 155.75 36.9678 156.504 36.9678C157.384 36.9678 158.138 36.7776 158.704 36.3337C159.333 35.8898 159.71 35.3191 159.898 34.5582H162.79C162.601 35.446 162.287 36.2703 161.721 36.9678C161.155 37.6653 160.464 38.236 159.647 38.6798C158.767 39.0603 157.824 39.3139 156.756 39.3139C155.31 39.3774 154.053 39.0603 153.047 38.4896ZM154.744 28.1539C154.242 28.4075 153.802 28.788 153.487 29.2952C153.173 29.8025 152.922 30.3098 152.859 30.9439H160.087C159.961 29.9293 159.584 29.105 158.956 28.5977C158.327 28.027 157.447 27.7734 156.441 27.7734C155.813 27.71 155.247 27.8368 154.744 28.1539Z"
        fill="#E60000"
      />
      <path
        d="M168.069 38.4896C167.001 37.9189 166.184 37.0946 165.618 36.0801C165.052 35.0021 164.738 33.7973 164.738 32.4023C164.738 31.0073 164.989 29.7391 165.555 28.7245C166.121 27.71 166.875 26.8857 167.881 26.315C168.886 25.7443 170.018 25.4272 171.338 25.4272C172.658 25.4272 173.789 25.6809 174.795 26.1882C175.8 26.6954 176.554 27.4564 177.12 28.4709C177.686 29.4855 178 30.6268 178 31.895C178 32.0853 178 32.2121 178 32.4023C178 32.5925 178 32.7828 177.937 32.973H167.755C167.755 33.0364 167.755 33.0364 167.755 33.0364V33.0998C167.818 33.8607 167.944 34.5582 168.258 35.1289C168.572 35.6996 169.012 36.1435 169.578 36.4605C170.143 36.7776 170.772 36.9678 171.526 36.9678C172.406 36.9678 173.16 36.7776 173.726 36.3337C174.355 35.8898 174.732 35.3191 174.92 34.5582H177.811C177.623 35.446 177.309 36.2703 176.743 36.9678C176.177 37.6653 175.486 38.236 174.669 38.6798C173.789 39.0603 172.846 39.3139 171.778 39.3139C170.332 39.3774 169.138 39.0603 168.069 38.4896ZM169.766 28.1539C169.263 28.4075 168.823 28.788 168.509 29.2952C168.195 29.8025 167.944 30.3098 167.881 30.9439H175.109C174.983 29.9293 174.606 29.105 173.977 28.5977C173.349 28.027 172.469 27.7734 171.463 27.7734C170.835 27.71 170.269 27.8368 169.766 28.1539Z"
        fill="#E60000"
      />
      <path
        d="M29.5982 58.7027C45.3925 58.7027 58.1963 45.7855 58.1963 29.8514C58.1963 13.9172 45.3925 1 29.5982 1C13.8038 1 1 13.9172 1 29.8514C1 45.7855 13.8038 58.7027 29.5982 58.7027Z"
        fill="#FF0101"
      />
      <path
        d="M41.9174 17.423C44.5556 17.423 46.6942 15.2654 46.6942 12.6039C46.6942 9.94239 44.5556 7.78479 41.9174 7.78479C39.2792 7.78479 37.1406 9.94239 37.1406 12.6039C37.1406 15.2654 39.2792 17.423 41.9174 17.423Z"
        fill="#020203"
      />
      <mask
        id="mask0_48_1"
        style="mask-type:alpha"
        maskUnits="userSpaceOnUse"
        x="1"
        y="1"
        width="58"
        height="58"
      >
        <path
          d="M29.5982 58.7027C45.3925 58.7027 58.1963 45.7855 58.1963 29.8514C58.1963 13.9172 45.3925 1 29.5982 1C13.8038 1 1 13.9172 1 29.8514C1 45.7855 13.8038 58.7027 29.5982 58.7027Z"
          fill="#FF0101"
        />
      </mask>
      <g mask="url(#mask0_48_1)">
        <path
          d="M40.5346 30.422C40.8489 30.9293 41.4146 31.2463 42.0431 31.2463C42.3574 31.2463 42.6716 31.1829 42.9859 30.9927L51.5968 25.7931C52.4767 25.2858 52.7281 24.1445 52.2253 23.3201C51.7225 22.4324 50.5911 22.1788 49.774 22.686L42.6088 26.9979L39.1519 20.2131C38.2091 19.2619 37.1406 18.3108 36.0721 17.4865L25.827 12.2869C25.1356 11.9698 24.3814 12.0332 23.8157 12.5405L15.2677 20.3399C14.5134 21.0374 14.4506 22.1788 15.142 22.8763C15.8334 23.6372 16.9647 23.7006 17.6561 23.0031L25.387 16.028L30.7295 18.7546L21.553 33.0852L0.622904 58.0686C-0.194187 59.0197 -0.131334 60.5415 0.874316 61.3659C1.81711 62.1902 3.32559 62.1268 4.14268 61.1122L24.4442 37.4605L33.1808 39.4896L27.2098 48.9376C26.5812 50.079 26.9584 51.474 28.0897 52.1081C29.0954 52.6788 30.4153 52.4251 31.1067 51.4106L38.7747 39.1725C39.2147 38.5384 39.2776 37.7141 39.0261 37.0166C38.7119 36.3191 38.1462 35.8118 37.392 35.685L30.6667 34.0998L36.7634 24.4615L40.5346 30.422Z"
          fill="#020203"
        />
      </g>
    </svg>
  ),
  protein: (props) => (
    <svg
      {...props}
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="60" height="60" rx="6" fill="#4AB8FF" fill-opacity="0.1" />
      <path
        d="M39.2353 24.4706C38.8824 24.1176 38.4118 23.8823 38.0588 23.8823C37.9412 23.4118 37.8235 23.0588 37.4706 22.7059C36.6471 21.8823 35.2353 21.8823 34.4118 22.7059C33.7059 23.4118 33.5882 24.5882 34.1765 25.4118L31.5882 27.8823L30.2941 26.5882L27.7059 29.1765C27.4706 29.0588 27.1176 29.0588 26.8824 29.0588C23.5882 29.0588 21 31.647 21 34.9412C21 38.2353 23.5882 40.8235 26.8824 40.8235C30.1765 40.8235 32.7647 38.2353 32.7647 34.9412C32.7647 34.7059 32.7647 34.3529 32.6471 34.1176L35.2353 31.5294L33.9412 30.2353L36.4118 27.7647C37.2353 28.3529 38.4118 28.2353 39.1176 27.5294C40.0588 26.7059 40.0588 25.2941 39.2353 24.4706Z"
        fill="#4AB8FF"
      />
    </svg>
  ),
};
```

### 3. Navbar

- create [NavMenu](src/components/navbar/NavMenu.jsx)

```jsx
import React from "react";
import { Link } from "react-router-dom";

const NavMenu = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Accueil</Link>
        </li>
        <li>
          <Link href="/profil">Profil</Link>
        </li>
        <li>
          <Link href="/reglage">Réglage</Link>
        </li>
        <li>
          <Link href="/communaute">Communauté</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
```

- create [Logo](src/components/navbar/Logo.jsx)

```jsx
import { Icons } from "../Icons";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <>
      <Link href="/" className="flex gap-2 items-center">
        <Icons.logo />
      </Link>
    </>
  );
};

export default Logo;
```

- create [Navbar](src/components/navbar/Navbar.jsx)

```jsx
import React from "react";
import NavMenu from "./NavMenu";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <>
      <header>
        <Logo />
        <NavMenu />
      </header>
    </>
  );
};

export default Navbar;
```

### 4. Sass folder structure

- create [styles](src/styles) folder structure

### 5. Sidebar

- create [Sidebar](src/components/sidebar/Sidebar.jsx)

```jsx
import { Link } from "react-router-dom";
import { Icons } from "../Icons";
import styles from "./sidebar.module.scss";

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      {/* Ajoutez les attributs aria-label aux éléments Link contenant les icônes */}
      <Link
        to="/"
        aria-label="Cliquez sur l'icon Yoga pour avoir des informations sur vos activités de Yoga"
        tabIndex={0}
      >
        <Icons.yoga />
      </Link>
      <Link
        to="/"
        aria-label="Cliquez sur l'icon Swim pour avoir des informations sur vos activités de Swim"
        tabIndex={0}
      >
        <Icons.swim />
      </Link>
      <Link
        to="/"
        aria-label="Cliquez sur l'icon Bike pour avoir des informations sur vos activités de Bike"
        tabIndex={0}
      >
        <Icons.bike />
      </Link>
      <Link
        to="/"
        aria-label="Cliquez sur l'icon Fitness pour avoir des informations sur vos activités de Fitness"
        tabIndex={0}
      >
        <Icons.fitness />
      </Link>
    </aside>
  );
};

export default Sidebar;
```

- style [sidebar](src/components/sidebar/sidebar.module.scss)

```scss
@import "/src/styles/main.scss";

.sidebar {
  background: black;
  @include flex(column, center, center);
  height: calc(100vh - 9.1rem);
  width: 11.7rem;
  gap: 20px;
}
```

- create [Communaute](src/pages/communaute/Communaute.jsx),[](src/pages/notFound/NotFound.jsx),[Profil](src/pages/profil/Profil.jsx),[Reglage](src/pages/reglage/Reglage.jsx) and [Home](src/pages/home/Home.jsx) pages

### 6. Layout

- create [Layout](src/components/layout/Layout.jsx)

```jsx
import Navbar from "../navbar/Navbar";
import styles from "./layout.module.scss";
const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Navbar />
      <div className={styles.children}>{children}</div>
    </div>
  );
};

export default Layout;
```

- style [Layout](src/components/layout/layout.module.scss)

```scss
@import "/src/styles/main.scss";

.layout {
  .children {
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 9.1rem);
    width: 100vh;
  }
}
```

### 7. Users

- install [react-wrap-balancer](https://react-wrap-balancer.vercel.app/)

- [Users](src/components/users/Users.jsx)

```js
import React from "react";
import { USER_MAIN_DATA } from "../../data/mockedData";
import { Link } from "react-router-dom";
import styles from "./users.module.scss";

const Users = () => {
  const UsersData = USER_MAIN_DATA;
  return (
    <ul className={styles.links}>
      {UsersData.map((UserData) => (
        <Link
          to={`/user/${UserData.id}`}
          key={UserData.id}
          className={styles.link}
          aria-label={`Aller sur le profil de ${UserData.userInfos.firstName}`}
        >
          <li> Je veux être {UserData.userInfos.firstName}</li>
        </Link>
      ))}
    </ul>
  );
};

export default Users;
```

### 8. User Page

- add [backend](backend) folder
- install [prop-types](https://www.npmjs.com/package/prop-types)

- create [Title](src/components/title/Title.jsx)

```jsx
import PropTypes from "prop-types";
import ClapIcon from "../../assets/IconClap.png";
import { Icons } from "../Icons";

function Title({ id, firstname }) {
  return (
    <div className="titleWrap">
      <div className="nameWrap">
        Bonjour
        <div key={id} className="titleName">
          {firstname}
        </div>
      </div>
      <div className="titleCongrats">
        Félicitation ! Vous avez explosé vos objectifs hier <Icons.ClapIcon />
      </div>
    </div>
  );
}

Title.propTypes = {
  id: PropTypes.number.isRequired,
  firstname: PropTypes.string.isRequired,
};

export default Title;
```

- create [api](src/api/user/index.js)

```js
import axios from "axios";
const API_BASE_URL = "http://localhost:3008";

const getUsersData = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/user`);
    return response.data;
  } catch (error) {
    console.log(
      "🚀 ~ file: index.js:15 ~ getUsersData ~ error:Erreur lors de la récupération des données",
      error
    );
  }
};
const getUserData = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/user/${id}`);
    return response.data;
  } catch (error) {
    console.log(
      "🚀 ~ file: index.js:15 ~ getUsersData ~ error:Erreur lors de la récupération des données",
      error
    );
  }
};

export { getUsersData, getUserData };
```

- create [User](src/pages/user/User.jsx) page

```js
import React, { useEffect, useState } from "react";
import Title from "../../components/Title/Title";
import { useNavigate, useParams } from "react-router-dom";
import { USER_MAIN_DATA } from "../../data/mockedData";
import { getUserData } from "../../api/user";
import styles from "./user.module.scss";
import { useQuery } from "@tanstack/react-query";
// import { BASE_URL } from "../../config/Config";
// import { API_BASE_URL } from "../../config/Config";

const User = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["userData", id],
    queryFn: () => getUserData(id),
  });
  console.log("🚀 ~ file: User.jsx:27 ~ User ~ data:", data);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>'Erreur lors du chargement des données utilisateur'.</div>;
  }
  //Old way to fetch data
  //   const [userData, setUserData] = useState();
  //   const [isLoading, setIsLoading] = useState(true);
  //   useEffect(() => {
  //     setIsLoading(true);
  //     getUserData(id).then((responseData) => {
  //       setUserData(responseData.data);
  //       setIsLoading(false);
  //     });
  //   }, []);
  //   return <>{isLoading ? <div>Loading...</div> : <h2>{userData.id}</h2>}</>;

  return (
    <>
      <h1>
        Bonjour{" "}
        <span className={styles.title}>{data.data.userInfos.firstName}</span>
      </h1>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </>
  );
};

export default User;
```

## Section 3: Charts

### 9. ActivityChart

- install [recharts](https://recharts.org/en-US/guide/installation)
- create [getUserActivityData](src/api/user/index.js)

```js
const getUserActivityData = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/user/${id}/activity`);
    return response.data;
  } catch (error) {
    console.log(
      "🚀 ~ file: index.js:15 ~ getUsersData ~ error:Erreur lors de la récupération des données",
      error
    );
  }
};
```

- create [ActivityChart](src/components/Charts/ActivityChart/ActivityChart.jsx)

```jsx
import React from "react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Line,
  ResponsiveContainer,
} from "recharts";
import styles from "./ActivityChart.module.scss";
const xAxisTickFormat = (value) => {
  const valueDay = value.split("-");

  return Number(valueDay[2]);
};

const ActivityChart = ({ userActivityData }) => {
  console.log(
    "🚀 ~ file: ActivityChart.jsx:14 ~ ActivityChart ~ userActivityData:",
    userActivityData.data.sessions
  );
  const { sessions } = userActivityData.data;
  console.log(
    "🚀 ~ file: ActivityChart.jsx:19 ~ ActivityChart ~ sessions:",
    sessions
  );

  return (
    <div className={styles.activityChart}>
      <h1 className={styles.title}>Activité quotidienne </h1>
      {/* <ResponsiveContainer width="100%" height="100%"> */}
      <div style={{ width: "100%", height: "100%" }}>
        <BarChart width={730} height={250} data={sessions}>
          {/* <CartesianGrid horizontal={false} vertical={false} /> */}
          <CartesianGrid
            vertical="false"
            strokeDasharray="3"
            height={1}
            horizontalPoints={[90, 185]}
          />
          <XAxis
            dataKey="day"
            tickFormatter={xAxisTickFormat}
            // tickSize="0"
            // interval="preserveStartEnd"
            // tickMargin="25"
            stroke="#9B9EAC"
          />
          <YAxis
            axisLine={false}
            orientation="right"
            type="number"
            tickSize="0"
            tickMargin="30"
            stroke="#9B9EAC"
            // width={50}
          />
          <Tooltip />
          <Legend
            className={styles.activityLegend}
            verticalAlign="top"
            align="right"
            height={80}
            iconType="circle"
            iconSize={8}
            formatter={(value, entry, index) => (
              <span className={styles.activityLegendColor}>{value}</span>
            )}
          />
          <Bar
            dataKey="kilogram"
            fill="#282D30"
            name="Poids (kg)"
            barSize={7}
            radius={[25, 25, 0, 0]}
          />
          <Bar
            dataKey="calories"
            fill="#E60000"
            name="Calories brûlées (kCal)"
            radius={[25, 25, 0, 0]}
            barSize={7}
          />
        </BarChart>
      </div>
      {/* </ResponsiveContainer> */}
    </div>
  );
};

export default ActivityChart;
```

### 10. Average Session

- create [getuserAverageSession,getuserPerformance](src/api/user/index.js)

```js
const getuserAverageSession = async (id) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/user/${id}/average-sessions`
    );
    return response.data;
  } catch (error) {
    console.log(
      "🚀 ~ file: index.js:15 ~ getUsersData ~ error:Erreur lors de la récupération des données",
      error
    );
  }
};

const getuserPerformance = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/user/${id}/performance`);
    return response.data;
  } catch (error) {
    console.log(
      "🚀 ~ file: index.js:15 ~ getUsersData ~ error:Erreur lors de la récupération des données",
      error
    );
  }
};
```

- create [AverageSession](src/components/Charts/AverageSession/AverageSession.jsx)

```js
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Line,
  LineChart,
} from "recharts";
import PropTypes from "prop-types";
import styles from "./AverageSession.module.scss";

const xAxisFormatter = (day) => {
  switch (day) {
    case 1:
      return "L";
    case 2:
      return "M";
    case 3:
      return "M";
    case 4:
      return "J";
    case 5:
      return "V";
    case 6:
      return "S";
    case 7:
      return "D";
    default:
      return "";
  }
};
const AverageSession = ({ userAverageSession }) => {
  console.log(
    "🚀 ~ file: AverageSession.jsx:13 ~ AverageSession ~ userAverageSession:",
    userAverageSession
  );
  const { sessions } = userAverageSession.data;
  console.log(
    "🚀 ~ file: AverageSession.jsx:18 ~ AverageSession ~ sessions:",
    sessions
  );

  return (
    <div className={styles.averageSession}>
      <h1 className={styles.title}>Durée moyenne des sessions</h1>
      <LineChart
        width={730}
        height={250}
        data={sessions}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid horizontal={false} vertical={false} />

        <YAxis
          // dataKey="sessionLength"
          hide="true"
          domain={["dataMin", "dataMax"]}
        />
        <XAxis
          dataKey="day"
          type="category"
          axisLine={false}
          tickLine={false}
          tick={{ fontSize: 12, fontWeight: 500 }}
          tickFormatter={xAxisFormatter}
          stroke="rgba(255, 255, 255, 0.5)"
          tickMargin={40}
        />
        <Tooltip />
        <Legend />
        <Line
          dataKey="sessionLength"
          type="natural"
          stroke="#FFFFFF"
          dot={false}
          strokeWidth={2}
        />
        {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
      </LineChart>
    </div>
  );
};

export default AverageSession;

AverageSession.prototype = {
  userAverageSession: PropTypes.object.isRequired,
};
```

### 11. NutritionCard

- create [nutritionCard](src/components/Charts/nutritionCard/NutritionCard.jsx)

```js
import PropTypes from "prop-types";
// import { Icons } from "../../Icons";
import styles from "./nutritionCard.module.scss";

function NutritionCard({ id, Icon, keyDataSwitch, keyDataType }) {
  return (
    <div className={styles.nutritionCard} key={id}>
      <Icon />
      <div className={styles.nutritionCardText}>
        <div className={styles.nutritionCardKeyData}>{keyDataSwitch}</div>
        <div className={styles.nutritionCardKeyType}>{keyDataType}</div>
      </div>
    </div>
  );
}

NutritionCard.propTypes = {
  icon: PropTypes.string.isRequired,
  keyDataSwitch: PropTypes.array.isRequired,
  keyDataType: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default NutritionCard;
```

- style [nutritionCard](src/components/Charts/nutritionCard/nutritionCard.module.scss)

```js
.nutritionCard {
  background-color: #fbfbfb;
  gap: 2.4rem;
  padding: 8%;
  display: flex;
  width: 100%;
  height: 12.4rem;
  border-radius: 0.5rem;
}

.nutritionCardIcon {
  width: 50px;
  height: 50px;
}

.nutritionCardText {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 5px;
}

.nutritionCardKeyData {
  font-weight: 700;
  font-size: 18px;
}

.nutritionCardKeyType {
  font-weight: 500;
  font-size: 14px;
}

```

### 12. Score

- create [Score](src/components/Charts/score/ScoreChart.jsx)

```jsx
import React from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
import PropTypes from "prop-types";
import styles from "./scoreChart.module.scss";

function ScoreChart({ userData }) {
  console.log(
    "🚀 ~ file: ScoreChart.jsx:10 ~ ScoreChart ~ dataScore:",
    userData
  );

  function formatScore(data) {
    if (data.todayScore) {
      data.score = data.todayScore;
      delete data.todayScore;
      return data;
    }
  }
  // formatScore(userData);

  formatScore(userData);
  // console.log(userData);

  function calculatePercentage(data) {
    const score = Number(data.score);

    return Math.round(score * 100);
  }

  const scorePercentage = calculatePercentage(userData);
  const radialData = [{ name: "Score", score: userData.score }];
  const score = [{ value: userData.score }, { value: 1 - userData.score }];

  return (
    <div className={styles.scoreChart}>
      <ResponsiveContainer
        width="100%"
        height="100%"
        style={{ display: "flex" }}
      >
        <PieChart width={160} height={160}>
          <Pie
            data={score}
            dataKey="value"
            innerRadius={70}
            outerRadius={85}
            startAngle={90}
            endAngle={450}
            // fill="#ff0000"
            // fill="#8884d8"
          >
            {score.map((entry, index) =>
              index === 0 ? (
                <Cell key={`cell-${index}`} cornerRadius={10} fill="#FF0000" />
              ) : (
                <Cell key={`cell-${index}`} fill="#ffffff" />
              )
            )}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className={styles.score}>
        <div className={styles.scoreItem}>
          <p className={styles.scoreResult}>{scorePercentage}%</p>
          <p className={styles.scoreText}>
            de votre
            <br />
            objectif
          </p>
        </div>
      </div>
    </div>
  );
}

ScoreChart.propTypes = {
  userData: PropTypes.object.isRequired,
};

export default ScoreChart;
```

### 13. Fetch Users in development and in production Mode

- fetch `usersData` in [Home](src/pages/home/Home.jsx)

```js
import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Layout from "../../components/layout/Layout";
import styles from "./home.module.scss";
import Balancer from "react-wrap-balancer";
import { USER_MAIN_DATA } from "../../data/mockedData";
import Users from "../../components/users/Users";
import { Link } from "react-router-dom";
import { useFetchUsersData } from "../../hooks/reactQueryCustomHooks";

const Home = () => {
  const { usersData, usersError, isUsersLoading } = useFetchUsersData();
  console.log("🚀 ~ file: Home.jsx:13 ~ Home ~ usersData:", usersData);

  if (isUsersLoading) {
    return <div>Loading...</div>;
  }

  if (usersError) {
    return <div>'Erreur lors du chargement des données utilisateur'.</div>;
  }

  return (
    <>
      <h1>
        Bienvenue sur{" "}
        <span
          arial-label="SportSee est le nom de la marque"
          tabIndex={0}
          className={styles.sportsee}
        >
          SportSee
        </span>
      </h1>
      <p>
        {/* <Balancer> */}
        Projet 12 de la formation de développeur front-end d'
        <span className={styles.openclassrooms}>
          <Link to={"https://openclassrooms.com/fr/"}>OpenClassRoom</Link>
        </span>
        , cette démo met en avant le tableau de bord d'un utilisateur de l'application
        SportSee, une startup dédiée au coaching sportif. En pleine croissance, l’entreprise
        va aujourd’hui lancer une nouvelle version de la page profil de l’utilisateur.
        Cette page va notamment permettre à l’utilisateur de suivre le nombre de
        sessions réalisées ainsi que le nombre de calories brûlées.
        {/* </Balancer> */}
      </p>
      <br />
      <p className={styles.choice}>
        Choisissez un utilisateur ci-dessous pour accéder au tableau de bord:
      </p>

      <div className={styles.users}>
        <Users usersData={usersData} />
      </div>
    </>
  );
};

export default Home;
```

- update [Users](src/components/users/Users.jsx) to fetch `Users` in `development` and `production` Mode.

```js
import React from "react";
import { USER_MAIN_DATA } from "../../data/mockedData";
import { Link } from "react-router-dom";
import styles from "./users.module.scss";

const Users = ({ usersData }) => {
  let UsersData;

  if (import.meta.env.DEV) {
    // En mode de développement (local), utilisez les données locales (mockées)
    UsersData = USER_MAIN_DATA;
  } else {
    // En production, utilisez les données de l'API réelle
    UsersData = usersData;
  }

  return (
    <ul className={styles.links}>
      {UsersData.map((UserData) => (
        <Link
          to={`/user/${UserData.id}`}
          key={UserData.id}
          className={styles.link}
          aria-label={`Aller sur le profil de ${UserData.userInfos.firstName}`}
        >
          <li> Je veux être {UserData.userInfos.firstName}</li>
        </Link>
      ))}
    </ul>
  );
};

export default Users;

{
  /* {JSON.stringify(import.meta.env.VITE_REACT_API_BASE_URL)} */
}
```

## External link

- [prop-types](https://www.npmjs.com/package/prop-types)
- [recharts](https://recharts.org/en-US/guide/installation)

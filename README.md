# screen-master

A presentation tool for hackers. Create live presentation with live data. (e.g. scoreboard, name, etc) using React and cast it to a projector screen.

แปลงของที่ Render เป็น Tree -> Firebase -> หน้า render แปลง Tree กลับมาเป็น JSX (React Element) ก็คือให้ React เข้าไปแก้ไข ข้อมูลใน Element อีกที

## Workflow

- You write the code to determine how things will be deployed on a projector screen using React and JSX.

- The rendered screen is sent to the projector through Firebase.

- This means we can customize the code and change everything on the screen without needing to refresh the page on the projector.
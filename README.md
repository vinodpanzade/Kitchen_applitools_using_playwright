# 🚀 Playwright Automation Framework

A robust UI Automation Framework built with **Playwright**, **TypeScript**, and the **Page Object Model (POM)** design pattern.

This project demonstrates real-world automation scenarios using the Applitools Kitchen Sink application while following industry-standard test automation practices.

---

## 🛠️ Tech Stack

- Playwright
- TypeScript
- Page Object Model (POM)

---

## 📌 Features Automated

### 🚨 Alert Handling
- JavaScript Alerts
- Confirm Dialogs
- Prompt Dialogs
- Dialog Event Handling

### 🎨 Canvas Testing
- Page Navigation
- Canvas Page Validation

### 🖱️ Drag & Drop
- Drag and Drop Elements
- Dynamic Menu Item Validation
- Test ID Locators

### 🖼️ iFrame Handling
- Frame Navigation
- `contentFrame()`
- `page.frame()`
- `page.frames()`

### 🔗 Link Validation
- New Tab Handling
- Popup Validation
- URL Verification

### 📋 Dropdown Testing
- Select by Value
- Select by Text
- Select by Index

### 📊 Web Table Testing
- Row & Column Count
- Dynamic Table Traversal
- Cell Validation
- Data Search within Tables

---

## 🎯 Playwright Concepts Covered

✔️ Locators

✔️ Assertions

✔️ Page Object Model (POM)

✔️ Dialog Handling

✔️ iFrames

✔️ Web Tables

✔️ Dropdowns

✔️ New Tabs & Popups

✔️ Drag & Drop

✔️ Loops & Dynamic Elements

✔️ Reusable Methods

✔️ TypeScript Integration

---

## 📂 Project Structure

```text
├── pages
│   ├── Alert.ts
│   ├── Canvas.ts
│   ├── Dragdrop.ts
│   ├── iFrames.ts
│   ├── Link.ts
│   ├── Select.ts
│   └── Tables_page.ts
│
├── tests
│   ├── Alert.spec.ts
│   ├── Canvas.spec.ts
│   ├── Dragdrop.spec.ts
│   ├── iFrames.spec.ts
│   ├── Link.spec.ts
│   ├── Select.spec.ts
│   └── Tables.spec.ts
```

---

## ▶️ Run Tests

Install dependencies:

```bash
npm install
```

Run all tests:

```bash
npx playwright test
```

Run tests in headed mode:

```bash
npx playwright test --headed
```

Generate HTML report:

```bash
npx playwright show-report
```

---

## 🌟 Key Highlights

- Clean POM Architecture
- Reusable Page Classes
- TypeScript-Based Framework
- Beginner Friendly
- Covers Frequently Asked Playwright Interview Topics
- Easy to Extend and Maintain

---

### 👨‍💻 Author

**Vinod Panzade**

Passionate about Test Automation, Web Development, and Continuous Learning.

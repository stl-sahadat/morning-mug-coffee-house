# ☕ Morning Mug Coffee House — Complete Architecture & Developer Documentation

> **Live Demo:** [https://stl-sahadat.github.io/morning-mug-coffee-house/](https://stl-sahadat.github.io/morning-mug-coffee-house/)  
> **Repository:** [https://github.com/stl-sahadat/morning-mug-coffee-house](https://github.com/stl-sahadat/morning-mug-coffee-house)  
> **Project Name:** Morning Mug Coffee House Website  
> **Founder:** Md Sahadat Hossain  
> **Brand Location:** Sunnash, Uttar Badda, Dhaka, Bangladesh  
> **Founded:** February 2, 2025  
> **Design Framework:** UI/UX Pro Max & Modern Artisanal Café Design System  
> **Tech Stack:** Semantic HTML5, Modern CSS3 (Custom Design Tokens, Flexbox, CSS Grid), Vanilla ES6+ JavaScript, Inline Scalable SVG Icons (Zero Emoji Icons)

---

## 📌 ১. ওভারভিউ (Project Overview)

**Morning Mug Coffee House** একটি আধুনিক, উচ্চ-মানের এবং রেসপনসিভ ক্যাফে অ্যান্ড রেস্তোরাঁ ফ্রন্টএন্ড ওয়েব অ্যাপ্লিকেশন। ওয়েবসাইটটিতে রয়েছে গ্রাহকবান্ধব ডিজিটাল মেনু, রিয়েল-টাইম অর্ডার কার্ট সিস্টেম যা সরাসরি **WhatsApp Business**-এর সাথে সংযুক্ত, একটি ইন্টারেক্টিভ টেবিল রিজার্ভেশন ফর্ম, ফটো গ্যালারি, কন্টাক্ট সিস্টেম এবং এক্সিকিউটিভ ব্র্যান্ডিং।

পুরো প্রজেক্টটি কোনো থার্ড-পার্টি হেভি ফ্রেমওয়ার্ক (যেমন React, Vue, jQuery বা Bootstrap) ছাড়াই সম্পূর্ণ **Vanilla Web Technologies** দিয়ে নিখুঁতভাবে তৈরি করা হয়েছে, যাতে কোনো ডিপেন্ডেন্সি ছাড়াই যেকোনো ব্রাউজারে নিমিষে লোড হয় এবং যেকোনো ডেভেলপার সহজে কাস্টমাইজ বা স্কেল করতে পারে।

---

## 🏗️ ২. প্রজেক্ট ডিরেক্টরি স্ট্রাকচার (Folder & File Structure)

```text
Morning Mug Coffee House/
├── index.html            # হোম পেজ (ভিডিও ব্যাকগ্রাউন্ড, ফেভারিট আইটেম, আওয়ার্স, ফুটার)
├── about.html            # ফাউন্ডার পরিচিতি (Md Sahadat Hossain) ও ২০ জন টিমের পোর্টফোলিও
├── menu.html             # কফি, ড্রিঙ্কস, বেকারি ও খাবারের মেনু + রিয়েল-টাইম অর্ডার কার্ট
├── gallery.html          # কফি হাউসের প্রিমিয়াম ফটো গ্যালারি
├── contact.html          # কন্টাক্ট ফর্ম, সরাসরি ফোন/ইমেইল ও গুগল ম্যাপস
├── reservation.html      # টেবিল বুকিং ফর্ম ও ইনস্ট্যান্ট কনফার্মেশন সিস্টেম
├── signin.html           # কাস্টমার লগইন পেজ (UI ডেমো)
├── join.html             # কাস্টমার রেজিস্ট্রেশন পেজ (UI ডেমো)
├── admin.html            # 👑 সিকিউর অ্যাডমিন অ্যানালিটিক্স ড্যাশবোর্ড (KPI, Chart.js, বুকিং ট্র্যাকার)
├── analytics.js          # রিয়েল-টাইম ভিজিটর, প্রোডাক্ট ক্লিক ও কনভার্সন ট্র্যাকিং ইঞ্জিন
├── style.css             # সেন্ট্রালাইজড আধুনিক ডিজাইন সিস্টেম ও রেসপনসিভ স্টাইলশিট
├── script.js             # ফ্রন্টএন্ড ইন্টারেক্টিভ লজিক (কার্ট, হোয়াটসঅ্যাপ, রিজার্ভেশন, ন্যাভবার)
├── README.md             # পূর্ণাঙ্গ সিস্টেম আর্কিটেকচার ও ডেভেলপার গাইড (এই ফাইলটি)
├── images/               # অপ্টিমাইজড লোকাল ইমেজ অ্যাসেট (সকল মেনু প্রোডাক্ট ও ফাউন্ডারের ছবি)
│   ├── sahadat.jpg       # ফাউন্ডার Md Sahadat Hossain-এর ছবি
│   ├── americano.jpg
│   ├── cappuccino.jpg
│   ├── caramel-macchiato.jpg
│   ├── chocolate-croissant.jpg
│   ├── chocolate-muffin.jpg
│   ├── brownie.jpg
│   ├── lemon-iced-tea.jpg
│   ├── cold-brew.jpg
│   ├── ... (মোট ৩৩টি হাই-কোয়ালিটি লোকাল ইমেজ)
└── videos/               # মিডিয়া অ্যাসেট
    └── coffee-bg.mp4     # হোম পেজ হিরো সেকশনের ফুল-স্ক্রিন ব্যাকগ্রাউন্ড ভিডিও
```

---

## 🎨 ৩. ডিজাইন আর্কিটেকচার (UI/UX Pro Max Design System)

পুরো ওয়েবসাইটের ডিজাইন সিস্টেমটি `style.css`-এর মাধ্যমে সেন্ট্রালি নিয়ন্ত্রিত:

### ক. কালার প্যালেট (Color Tokens):
```css
:root {
    --espresso: #1e120c;        /* ডিপ ডার্ক এসপ্রেসো (হেডিং, ফুটার, হিরো বেস) */
    --brown: #2e1a11;           /* প্রাইমারি ডার্ক ব্রাউন */
    --brown-2: #482a1b;         /* সেকেন্ডারি ব্রাউন (ন্যাভ হোভার) */
    --caramel: #b86d2f;         /* আর্টিস্যান ক্যারামেল অ্যাকসেন্ট */
    --gold: #c28b52;            /* গোল্ড বাটন ও হাইলাইট */
    --gold-dark: #a26c36;       /* বাটন হোভার স্টেট */
    --gold-light: #e5bc87;      /* গোল্ড বর্ডার ও ব্যাজ */
    --cream: #faf5ed;           /* সফট ওটমিল ব্যাকগ্রাউন্ড */
    --cream-soft: #f4ecdf;      /* সেকশন ব্যাকগ্রাউন্ড */
    --border: #e3d3c2;          /* কার্ড ও ইনপুট বর্ডার */
    --card-bg: #ffffff;         /* কার্ড সারফেস */
    --text: #261b14;            /* হাই-কন্ট্রাস্ট বডি টেক্সট (WCAG 4.5:1+) */
    --muted: #6e594d;           /* সাবটাইটেল ও মেটা টেক্সট */
}
```

### খ. টাইপোগ্রাফি (Typography):
* **হেডিং ফন্ট:** `Playfair Display` (Google Fonts) — ক্যাফে, মেনু এবং আতিথেয়তার ক্লাসিক ও মার্জিত অনুভূতি তৈরি করে।
* **বডি ফন্ট:** `Plus Jakarta Sans` (Google Fonts) — ক্লিন, আধুনিক এবং যেকোনো স্ক্রিনে সহজে পঠনযোগ্য।

### গ. নো-ইমোজি পলিসি (Pure Inline Scalable SVGs):
ওয়েবসাইটে কোনো টেক্সট ইমোজি ব্যবহার করা হয়নি। প্রতিটি ব্র্যান্ড আইকন, কার্ট আইকন, সোশ্যাল মিডিয়া লোগো (Facebook, Instagram, TikTok, X), ম্যাপ পিন, ফোন, মেইল এবং কন্ট্রোল বাটন হিসেবে অপ্টিমাইজড **ইনলাইন এসভিজি (SVG)** কোড ব্যবহার করা হয়েছে যা:
- রেটিনা এবং হাই-ডিপিআই স্ক্রিনে কোনো ব্লার ছাড়া শার্প দেখায়।
- `currentColor` ব্যবহার করে সহজে কালার ও থিম অ্যাডাপ্ট করে।
- স্ক্রিন রিডারের জন্য `aria-hidden="true"` ও অ্যাক্সেসিবল টেক্সট নিশ্চিত করে।

---

## ⚙️ ৪. মূল ফিচার ও টেকনিক্যাল ফাংশনালিটি (Core Functionalities)

### ১. রিয়েল-টাইম কার্ট ও হোয়াটসঅ্যাপ চেকআউট (`menu.html` + `script.js`):
* **আইটেম অ্যাড:** যেকোনো মেনু কার্ডের `.order-btn` বাটনে ক্লিক করলে বাটনটির `data-name` এবং `data-price` স্বয়ংক্রিয়ভাবে জাভাস্ক্রিপ্ট ইন-মেমোরি কার্ট অ্যারেতে যোগ হয়।
* **ফিডব্যাক:** বাটনে ক্লিক করলে তাৎক্ষণিকভাবে গ্রিন ফিডব্যাক স্টেট প্রদর্শন করে (`Added!`) এবং স্ক্রিন স্মুথভাবে নিচে কার্ট প্যানেলের দিকে স্ক্রোল করে।
* **কোয়ান্টিটি কন্ট্রোল:** প্লাস (`+`), মাইনাস (`−`), এবং রিমুভ বাটনে ক্লিক করে সংখ্যা বাড়ানো/কমানো যায়।
* **হোয়াটসঅ্যাপ অটোমেশন:** "Proceed to Order" বাটনে চাপ দিলে কার্টের মোট আইটেম ও মূল্যের একটি সুন্দর ফরম্যাটেড মেসেজ প্রস্তুত হয়ে সরাসরি নির্দিষ্ট ফোন নম্বরে (`+8801320989282`) হোয়াটসঅ্যাপ চ্যাট উইন্ডো খুলে যায়:
  ```javascript
  const message = `Hello Morning Mug Coffee House, I would like to place an order: ${orderText}. Total: ${formatPrice(total)}.`;
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank");
  ```

### ২. টেবিল রিজার্ভেশন ফর্ম (`reservation.html` + `script.js`):
* **তারিখ ভ্যালিডেশন:** ক্লায়েন্ট-সাইড জাভাস্ক্রিপ্ট দিয়ে তারিখ ইনপুটের `min` অ্যাট্রিবিউট বর্তমান তারিখে লক করা থাকে, যাতে পেছনের কোনো তারিখ বুকিং করা না যায়।
* **ইনস্ট্যান্ট কনফার্মেশন কার্ড:** ফর্ম সাবমিট হলে পেজ রিলোড না হয়ে ইন-পেজ একটি মার্জিত গ্রিন কনফার্মেশন কার্ড রেন্ডার হয়।

### ৩. মোবাইল রেসপনসিভ ন্যাভবার:
* ট্যাবলেট ও মোবাইলে হ্যামবার্গার টগল বাটন কাজ করে (`.nav-links.open`)।
* মেনুর বাইরে স্ক্রিনের যেকোনো স্থানে ক্লিক করলে মেনুটি নিজে থেকেই বন্ধ হয়ে যায়।

### ৪. ব্যাক-টু-টপ বাটন:
* ব্যবহারকারী যখন স্ক্রিনে ৩৫০ পিক্সেলের বেশি নিচে স্ক্রোল করেন, কেবল তখনই ডানপাশে নিচে বাটনটি ভেসে ওঠে এবং ক্লিক করলে স্মুথলি টপে নিয়ে যায়।

---

## 🛠️ ৫. ডেভেলপারদের জন্য কাস্টমাইজেশন গাইড (How to Customize)

অন্য কোনো ডেভেলপার যদি প্রজেক্টে পরিবর্তন বা নতুন ফিচার যোগ করতে চান, তবে নিচের নিয়মগুলো অনুসরণ করলেই চলবে:

### ১. নতুন একটি মেনু আইটেম কীভাবে যোগ করবেন (`menu.html`):
নতুন একটি প্রোডাক্টের কার্ড যুক্ত করতে নিচের কোড স্নিপেটটি কপি করে `.menu-grid`-এর ভেতর পেস্ট করুন:
```html
<div class="menu-card">
    <div class="product-image">
        <img alt="Your Item Name" src="images/your-item.jpg" loading="lazy" />
    </div>
    <div class="menu-card-content">
        <div class="product-title">
            <h3>Your Item Name</h3>
            <span class="price">$4.50</span>
        </div>
        <p>Short, appetizing description of the item.</p>
        <button class="order-btn" data-name="Your Item Name" data-price="$4.50" type="button">
            Add to Order
        </button>
    </div>
</div>
```
*(ছবিটি অবশ্যই `images/` ফোল্ডারে সেভ করে তার পাথ `src` এ বসিয়ে দিন।)*

### ২. হোয়াটসঅ্যাপ বা যোগাযোগের ফোন নম্বর পরিবর্তন:
- `script.js` ফাইলে গিয়ে `phone = "8801320989282"` পরিবর্তন করে আপনার নতুন নাম্বার দিন (যেমন: `8801700000000`)।
- HTML ফাইলগুলোতে ফুটার বা হোয়াটসঅ্যাপ বাটনের লিংক পরিবর্তন করুন:
  ```html
  <a href="https://wa.me/YOUR_PHONE_NUMBER" class="whatsapp" ...>
  ```

### ৩. নতুন টিম মেম্বার যোগ করা (`about.html`):
টিম সেকশনের `.team-grid`-এ নিচের কোডটি যুক্ত করুন:
```html
<div class="team-card">
    <div class="team-avatar">
        <img src="images/member.jpg" alt="Member Name" loading="lazy">
    </div>
    <h3>Member Name</h3>
    <p>Role / Designation</p>
</div>
```

---

## 📊 ৬. অ্যাডমিন ড্যাশবোর্ড ও ট্র্যাকিং আর্কিটেকচার (Admin Analytics)

ক্যাফে ওনারের জন্য একটি পূর্ণাঙ্গ বিজনেস ইন্টেলিজেন্স ড্যাশবোর্ড তৈরি করা হয়েছে (`admin.html`):
1. **সিকিউরিটি গেটওয়ে:** অননুমোদিত প্রবেশ রোধে ৪-সংখ্যার সিকিউরিটি পিন স্ক্রিন (ডিফল্ট পিন: `1234`)।
2. **রিয়েল-টাইম মেট্রিক্স (KPIs):**
   - **মোট ভিজিটর ও ইউনিক ইউজার:** ব্রাউজার সেশন ও ইউনিক আইডেন্টিফায়ার ট্র্যাকিং।
   - **হোয়াটসঅ্যাপ অর্ডার কনভার্সন:** কার্ট থেকে কতজন সফলভাবে অর্ডার প্রসেস শুরু করেছে।
   - **টেবিল রিজার্ভেশন ট্র্যাকার:** ওয়েবসাইটে আসা সকল টেবিল বুকিংয়ের লাইভ লিস্ট।
3. **Chart.js ভিজ্যুয়ালাইজেশন:**
   - **পিক আওয়ার্স চার্ট:** সকাল ৬টা থেকে রাত ১১টা পর্যন্ত কোন কোন সময়ে গ্রাহকরা ওয়েবসাইটে বেশি সক্রিয়।
   - **টপ প্রোডাক্টস বার চার্ট:** মেনুর কোন কোন কফি বা বেকারি আইটেমে সবচেয়ে বেশি ক্লিক পড়ছে।
   - **ডিভাইস অনুপাত:** মোবাইল বনাম ডেস্কটপ ব্যবহারকারী।
4. **রিজার্ভেশন ম্যানেজমেন্ট ও CSV এক্সপোর্ট:**
   - বুকিং স্ট্যাটাস (Pending / Confirmed / Completed) এক ক্লিকে টগল করা যায়।
   - এক ক্লিকে সকল বুকিং ডাটা `.csv` স্প্রেডশিটে ডাউনলোড করা যায়।

---

## 🚀 ৭. লোকাল রান ও ডিপ্লয়মেন্ট গাইড (Run & Deployment)

### লোকালভাবে চালু করা:
কোনো সার্ভার বা ইনস্টলেশন ছাড়াই যেকোনো ব্রাউজারে `index.html` ফাইলটি ডাবল ক্লিক করে ওপেন করলেই সম্পূর্ণ ওয়েবসাইট কাজ করবে।
অথবা টার্মিনালে পাইথন সার্ভার দিয়ে চালাতে পারেন:
```bash
python -m http.server 8000
```
এরপর ব্রাউজারে `http://localhost:8000` ওপেন করুন।

### লাইভ পাবলিশ করা (Production Deployment):
1. **Netlify Drop (সবচেয়ে দ্রুত):**
   - [app.netlify.com/drop](https://app.netlify.com/drop)-এ গিয়ে সম্পূর্ণ ফোল্ডারটি ড্র্যাগ অ্যান্ড ড্রপ করলেই লাইভ ইউআরএল তৈরি হয়ে যাবে।
2. **GitHub Pages:**
   - গিটহাবে রিপোজিটরি তৈরি করে ফাইলগুলো পুশ করুন ➔ Settings ➔ Pages ➔ Branch: `main` ➔ Save.
3. **cPanel / Apache / Nginx হোস্টিং:**
   - যেকোনো হোস্টিংয়ের `public_html` ফোল্ডারে সব ফাইল আপলোড করে দিলেই সাইট লাইভ হয়ে যাবে।

---

## 👥 ৮. ক্রেডিট ও লাইসেন্স (Credits & Attribution)

* **উদ্যোক্তা ও প্রতিষ্ঠাতা:** মোঃ শাহাদাত হোসেন (Md Sahadat Hossain)
* **যোগাযোগ:** 01320989282 | stdrsahadat@gmail.com | [Facebook Profile](https://www.facebook.com/md.sahadat2.0)
* **ফটো অ্যাট্রিবিউশন:** Unsplash (Royalty-free high resolution commercial photography)
* **কপিরাইট:** © 2026 Morning Mug Coffee House. All rights reserved.

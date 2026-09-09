# Government Boys High School, P.H. Pilot, Dadu — Website

**15 pages total:**

- **10 public pages** — Home, About, Academics, Admissions, Student Life,
  Faculty, News & Events, Gallery, Resources, Contact. These are real,
  working pages — ready to edit and launch.
- **5 portal preview pages** — Portal Login, Student Portal, Parent
  Portal, Teacher Portal, Admin Dashboard. These show what each portal
  *could* look like, filled with sample data. **They are UI previews
  only — not connected to any real login, database, or student
  records.** See "Why the portals are previews, not the real thing"
  below.

No build tools, no server, no coding needed to run it — it's plain HTML,
CSS, and JavaScript, so it works on any basic web host, including GitHub
Pages (free).

---

## 1. Put this on GitHub and go live (free, ~10 minutes)

1. Go to [github.com](https://github.com) and create a free account if you
   don't have one.
2. Click the **+** icon (top right) → **New repository**.
   - Name it something like `school-website`.
   - Set it to **Public**.
   - Do **not** check "Add a README" (you already have one).
   - Click **Create repository**.
3. On the new (empty) repository page, click **uploading an existing file**.
4. Drag this entire folder's contents into the upload box — all the
   `.html` files, the `css` folder, and the `js` folder together (drag the
   whole `school-site` folder if your browser allows it, or select
   everything inside it).
5. Scroll down and click **Commit changes**.
6. Once uploaded, go to the repository's **Settings** tab → **Pages** (in
   the left sidebar).
7. Under "Build and deployment" → **Source**, choose **Deploy from a
   branch**. Under **Branch**, choose `main` and folder `/ (root)`, then
   **Save**.
8. Wait 1–2 minutes, then refresh the page. GitHub will show you a live
   URL like `https://yourusername.github.io/school-website/` — that's
   your website, live on the internet.

You can repeat steps 3–5 any time you want to update the site: just
upload the changed files again and commit.

---

## 2. Why the portals are previews, not the real thing

The Student, Parent, Teacher, and Admin portals in your original plan
need three things a plain website (like this one) cannot provide on its
own:

1. **A real database** to store student records, attendance, grades,
   and fees.
2. **A secure login system** so each person only sees their own (or
   their child's) information.
3. **A server** to run the database and login logic — something that
   stays on 24/7, unlike a folder of files on GitHub Pages.

Building and hosting that securely is a genuinely separate project from
the public website — think of it as Phase 2 onward. I've included
working *previews* of all four portals (`student-portal.html`,
`parent-portal.html`, `teacher-portal.html`, `admin-dashboard.html`) so
you and your staff can see the intended layout and features with sample
data, and give feedback before real development starts. None of the
"Present/Absent" marks, grades, or fee statuses in them are real or
saved anywhere — refreshing the page always shows the same sample data.

When you're ready to build the real version, come back and I'll walk
you through it step by step — typically a free/low-cost setup using a
hosted database service (like Supabase) plus a proper web host (like
Vercel), still with no coding required from you.

---

## 3. What to edit before you launch the public site

- **School name, tagline, address, phone, email**: appear at the top of
  every page. Open any `.html` file and use Find & Replace (in any
  text/code editor, or GitHub's own online editor — click the pencil
  icon on a file) to update placeholder details like the phone number
  and email domain (`gbhspilotdadu.edu.pk` is a placeholder — swap for
  your school's real one if it has one, or a Gmail address if not).
- **Colors**: open `css/style.css` — the first block lists colors like
  `--ink` and `--accent`. Change the hex codes to reskin every page at
  once.
- **Photos**: every image currently points to a stock photo URL (from
  Unsplash) so the site looks complete. To use your own: upload image
  files into the `images` folder, then replace the long
  `https://images.unsplash.com/...` address in the relevant `.html`
  file with `images/your-photo-name.jpg`.
- **Logo**: the letter "G" in a dark square (`.brand-mark` in the CSS)
  is a placeholder. Once you have a real school crest or logo image,
  replace that block with `<img src="images/logo.png" alt="School
  logo">` in each page's header.
- **Forms** (newsletter, admissions inquiry, contact): currently show a
  friendly "not connected yet" message when submitted. The easiest
  beginner-friendly fix is a free service like
  [Formspree](https://formspree.io) — sign up, and it gives you a form
  address to paste into each `<form>` tag's `action="..."` attribute.
- **Map on the Contact page**: currently centered on Dadu generally.
  Search your school's exact address on Google Maps, click **Share** →
  **Embed a map**, and paste in the URL it gives you.
- **Fee figures** on the Admissions page are placeholders — replace with
  the current official Sindh Education Department fee notification
  amounts.

---

## File structure

```
school-site/
├── index.html              Home
├── about.html
├── academics.html
├── admissions.html
├── student-life.html
├── faculty.html
├── news-events.html
├── gallery.html
├── resources.html
├── contact.html
├── portal-login.html       Role picker → links to the 4 previews below
├── student-portal.html     Preview only — sample data
├── parent-portal.html      Preview only — sample data
├── teacher-portal.html     Preview only — sample data
├── admin-dashboard.html    Preview only — sample data
├── css/
│   └── style.css           All styling — edit colors/fonts here
├── js/
│   └── main.js              Mobile menu, FAQ accordion, gallery filter
├── images/                  Empty — add your own photos here
└── README.md                 This file
```

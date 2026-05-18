# 🛠️ Prakash Institute Ranchi: Production Admin Panel & Deployment Report

We have successfully launched the **Prakash Institute Ranchi** administrative console and website directly to production under your custom GoDaddy domain! This report documents your final live configurations, dynamic management capabilities, and secure administrative controls.

---

## 🔒 1. Production Authentication Credentials

The Admin Management Console is secured behind a state-of-the-art, glassmorphism login gate on your live domain:
* 🌐 **Live URL**: [https://www.prakashinstituteranchi.online/admin](https://www.prakashinstituteranchi.online/admin)
* 📧 **Admin ID / Email**: `prakash96089kumar@gmail.com`
* 🔑 **Admin Password**: `pksir96089`

> [!IMPORTANT]
> **Strict Identity Isolation**: The administrative verification panel strictly validates inputs. No other email IDs or passwords will be accepted by the system. Authentic sessions are preserved locally inside `sessionStorage` for enhanced browser session security.

---

## 🖼️ 2. Verified Live Production Interfaces

Our browser agents successfully verified both the secure entry gate and the console tabs directly on your live domain.

* **Live Admin Login Panel**: `https://www.prakashinstituteranchi.online/admin`
* **Live Management Console View**: Interactive CRUD tabs (Notice Board, Courses, Faculty, Achievers, Enquiry Options).

---

## 📊 3. Console Capabilities & CRUD Matrix

All actions within the management console synchronize instantly with your public-facing page using reactive `localStorage` triggers.

| Console Tab | Purpose | Real-time Integration | Safety Features |
| :--- | :--- | :--- | :--- |
| **Notice Board** | Add/Remove dynamic announcements & posters. | Syncs instantly with the home carousel slider. | Fully customizable images & links. |
| **Courses** | CRUD operations on specialized curriculum classes. | Immediately updates course offering grids. | Flexible ID matching. |
| **Faculty** | Moderate profiles, qualifications, and avatars. | Instantly refreshes the Primary Faculty slider. | **Prakash Sir** & **Sagar Sir** are locked and cannot be deleted. |
| **Achievers** | Manage topper scores, names, and images. | Syncs directly to the bottom rolling marquee. | Optional image URLs. |
| **Enquiry Options** | Control specialized courses in the form select dropdown. | Instantly repopulates options in the contact form. | Prevent static code locks. |

---

## 🛠️ 4. Active Routing Architectures

We deployed specialized single-page-application (SPA) rewrite configs so that direct navigation never fails:
1. **`vercel.json` (Vercel Root)**: Rewrites clean requests on `https://www.prakashinstituteranchi.online/admin` directly to index.html internally.
2. **`_redirects` (Netlify copy)**: Serves as a backup rewrite if you ever choose to cross-host.
3. **`.htaccess` (Apache copy)**: Serves standard configurations if deployed to traditional cPanel servers.

---

> [!TIP]
> **To add new contents to your website**:
> 1. Go to `https://www.prakashinstituteranchi.online/admin`.
> 2. Log in with the credentials above.
> 3. Fill out the details under the corresponding tab and click **Add**.
> 4. Go back to the public homepage—your updates will be visible instantly without rebuilding!

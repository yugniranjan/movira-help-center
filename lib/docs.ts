import type { IconName } from "@/components/icons";

export type DocSection = {
  id: string;
  title: string;
  paragraphs?: string[];
  steps?: string[];
  bullets?: string[];
  callout?: { tone: "info" | "warning" | "success"; title: string; text: string };
};

export type Article = {
  slug: string;
  title: string;
  description: string;
  category: string;
  minutes: number;
  updated: string;
  featured?: boolean;
  keywords: string[];
  sections: DocSection[];
};

export type Category = {
  slug: string;
  title: string;
  description: string;
  icon: IconName;
  accent: string;
};

export const categories: Category[] = [
  { slug: "getting-started", title: "Getting started", description: "Set up your workspace, park details, users, and daily operating basics.", icon: "rocket", accent: "blue" },
  { slug: "bookings-calendar", title: "Bookings & calendar", description: "Create bookings, manage availability, take payments, and handle changes.", icon: "calendar", accent: "violet" },
  { slug: "catalog-inventory", title: "Catalog & inventory", description: "Build activities, passes, bundles, extras, promos, and stock items.", icon: "catalog", accent: "orange" },
  { slug: "customers-products", title: "Customers & products", description: "Customer profiles, gift cards, vouchers, memberships, and forms.", icon: "customers", accent: "green" },
  { slug: "payments-pos", title: "Payments & POS", description: "Configure terminals, process payments, issue refunds, and close the day.", icon: "card", accent: "cyan" },
  { slug: "workforce", title: "Workforce", description: "Schedules, time clock, leave, availability, documents, and approvals.", icon: "team", accent: "pink" },
  { slug: "crm-communications", title: "CRM & communications", description: "Customers, segments, email campaigns, automation, notifications, and the shared conversations inbox.", icon: "megaphone", accent: "amber" },
  { slug: "admin-troubleshooting", title: "Admin & troubleshooting", description: "Roles, access, park switching, settings, and common issue resolution.", icon: "settings", accent: "slate" },
];

export const articles: Article[] = [
  {
    slug: "getting-started-with-movira",
    title: "Get started with Movira360",
    description: "A practical checklist for preparing your park workspace and completing your first day in Movira.",
    category: "getting-started",
    minutes: 7,
    updated: "2026-08-07",
    featured: true,
    keywords: ["setup", "onboarding", "first day", "park", "workspace"],
    sections: [
      { id: "before-you-begin", title: "Before you begin", paragraphs: ["Your Movira workspace is created for a specific park. The modules you can see depend on the park’s subscription and your assigned role."], bullets: ["Use the welcome email to set your permanent password.", "Confirm that the park name shown in the account switcher is correct.", "Ask your administrator for access if a required section is not visible."], callout: { tone: "info", title: "Park-specific access", text: "Switching parks can change the available navigation because each park may have different modules and permissions." } },
      { id: "setup-checklist", title: "Complete the setup checklist", steps: ["Open Admin → Locations and review the business name, address, timezone, currency, and tax settings.", "Set store hours and any special holiday hours.", "Create zones and areas used for capacity and booking allocation.", "Invite team members and assign the minimum role required for their work.", "Create at least one activity and schedule its available sessions.", "Review booking portal branding and publish the customer-facing portal."] },
      { id: "first-transaction", title: "Run a first transaction", paragraphs: ["Create a test customer and booking before opening sales. Confirm the booking appears in All Bookings, the amount is correct, and the confirmation email is delivered."], callout: { tone: "success", title: "Ready for daily use", text: "Once a booking, payment, confirmation, and check-in complete successfully, the core operating flow is ready." } },
    ],
  },
  {
    slug: "switch-between-parks",
    title: "Switch between parks",
    description: "Use the park selector safely and understand why menus and data change between locations.",
    category: "getting-started",
    minutes: 3,
    updated: "2026-08-07",
    keywords: ["park switcher", "location", "multiple parks", "access"],
    sections: [
      { id: "switch", title: "Select a park", steps: ["Open the account and park selector in the top-right corner.", "Search by park name, city, or state.", "Select the park you want to operate.", "Wait for the active park badge and page data to refresh before making changes."] },
      { id: "what-changes", title: "What changes after switching", bullets: ["Bookings, customers, products, schedules, terminals, reports, and settings are scoped to the selected park.", "Navigation only displays modules assigned to that park and allowed by your role.", "Theme and branding may also change for the selected park."] },
      { id: "missing", title: "A park is missing", paragraphs: ["If a park does not appear in search, your user account is not assigned to it, the park is archived, or access has expired. Contact a Movira administrator; do not try to work around park scope by editing a URL."], callout: { tone: "warning", title: "Check before saving", text: "Always verify the active park before creating customers, bookings, products, or staff schedules." } },
    ],
  },
  {
    slug: "configure-location-hours-and-zones",
    title: "Configure park details, hours, and zones",
    description: "Prepare the operational foundation used by availability, bookings, staffing, and reports.",
    category: "getting-started",
    minutes: 6,
    updated: "2026-08-07",
    keywords: ["location", "hours", "zones", "areas", "tax", "capacity"],
    sections: [
      { id: "location", title: "Review location settings", steps: ["Open Admin → Locations.", "Edit the active park and confirm its address, contact details, timezone, currency, and tax configuration.", "Save changes and refresh the page to confirm they persisted."] },
      { id: "hours", title: "Set operating hours", paragraphs: ["Store hours define the normal working window. Add special hours for holidays, closures, or one-off extended sessions so customer availability stays accurate."], steps: ["Open Store Hours.", "Set opening and closing time for each weekday.", "Add special hours for exceptions and save."] },
      { id: "zones", title: "Create zones and areas", paragraphs: ["Zones represent bookable or operational spaces. Use clear public names, set realistic capacity, and avoid duplicate areas."], callout: { tone: "info", title: "Capacity source", text: "Activity and booking availability can depend on zone capacity, so configure zones before publishing activities." } },
    ],
  },
  {
    slug: "create-a-booking",
    title: "Create a booking",
    description: "Find availability, select products, attach a customer, and confirm payment in the command center.",
    category: "bookings-calendar",
    minutes: 6,
    updated: "2026-08-07",
    featured: true,
    keywords: ["new booking", "reservation", "availability", "customer", "payment"],
    sections: [
      { id: "start", title: "Start a new booking", steps: ["Select the correct park, then choose New Booking.", "Choose the visit date and product type.", "Select an available activity or session and the required quantity.", "Review capacity, time, and price before continuing."] },
      { id: "customer", title: "Add the customer", paragraphs: ["Search by name, email, or phone before creating a customer to avoid duplicates. If no match exists, create a profile with accurate contact details."], steps: ["Select the customer.", "Add participants, extras, vouchers, or membership benefits where applicable.", "Review taxes, discounts, and the outstanding balance."] },
      { id: "confirm", title: "Confirm the booking", paragraphs: ["Choose the supported payment method, complete payment or send a payment link, and confirm the booking. The confirmation page shows the booking number and next actions."], callout: { tone: "success", title: "Verification", text: "A successful booking appears in All Bookings and the customer receives the configured confirmation message." } },
    ],
  },
  {
    slug: "manage-booking-changes",
    title: "Change, cancel, or review a booking",
    description: "Locate an existing booking and safely update customer, items, schedule, waiver, and payment details.",
    category: "bookings-calendar",
    minutes: 5,
    updated: "2026-08-07",
    keywords: ["edit booking", "cancel", "reschedule", "history", "waiver"],
    sections: [
      { id: "find", title: "Find the booking", steps: ["Open Bookings → All Bookings.", "Search by booking number, customer name, email, or phone.", "Open the booking and verify the customer and visit date before editing."] },
      { id: "tabs", title: "Use the booking workspace", bullets: ["Customer: contact and participant information.", "Tickets: booked products, quantities, and schedule details.", "Payments: balance, transactions, payment links, and refunds.", "Waivers: signature status and resend actions.", "History: an audit trail of booking changes."] },
      { id: "cancel", title: "Cancel responsibly", paragraphs: ["Review the cancellation and refund policy before confirming. Cancelling a booking and refunding a payment are separate actions unless the confirmation dialog explicitly says otherwise."], callout: { tone: "warning", title: "Do not duplicate refunds", text: "Check payment history and the refund operations queue before retrying a failed-looking refund." } },
    ],
  },
  {
    slug: "use-the-business-calendar",
    title: "Use the business calendar",
    description: "Review zone allocation, booking pressure, and availability across day, week, and month views.",
    category: "bookings-calendar",
    minutes: 4,
    updated: "2026-08-07",
    keywords: ["calendar", "zone allocation", "capacity", "day", "week", "month"],
    sections: [
      { id: "filters", title: "Set the calendar view", steps: ["Open Calendar.", "Choose a focus date and Day, Week, or Month view.", "Filter by zone type and adjust the operating time range.", "Use the empty-zone option only when planning unused capacity."] },
      { id: "read", title: "Read the live board", bullets: ["Allocated shows zones with booking blocks.", "Available shows zones that can still accept demand.", "Over capacity flags conflicts that need attention.", "Utilization compares allocated capacity with available capacity."] },
      { id: "no-data", title: "When no zones appear", paragraphs: ["Clear filters, verify that zones exist for the active park, confirm operating hours include the selected time, and check that activities are linked to the correct zone."], callout: { tone: "info", title: "Calendar scope", text: "The calendar only shows data for the currently selected park." } },
    ],
  },
  {
    slug: "configure-booking-availability-and-holds",
    title: "Configure availability, sales cut-off, and slot holds",
    description: "Keep Admin, POS, and the booking portal aligned on sellable sessions, capacity, and temporary holds.",
    category: "bookings-calendar",
    minutes: 8,
    updated: "2026-09-28",
    featured: true,
    keywords: ["slots", "availability", "sales cutoff", "sales cut-off", "temporary hold", "capacity", "checkout timer", "expired session"],
    sections: [
      { id: "one-source", title: "Use one schedule as the source of truth", paragraphs: ["Session start times, duration, capacity, sales cut-off, and availability should come from the same activity schedule for Admin, POS, and the public booking portal."], bullets: ["A 10-minute interval creates start times such as 10:00, 10:10, and 10:20.", "A 60-minute duration controls the end time; it does not replace the start interval.", "Capacity must be calculated against the selected session and every overlapping resource it uses."] },
      { id: "sales-cutoff", title: "Apply the sales cut-off", steps: ["Open Catalog → Activity Schedule and select the activity.", "Set the session interval, duration, capacity, and sales cut-off.", "Save and preview the same date in Admin, POS, and the booking portal.", "Confirm a session disappears or becomes unavailable when its park-local cut-off time passes."], callout: { tone: "info", title: "Park time is authoritative", text: "Availability and cut-off checks use the active park timezone, not the browser or staff member’s device timezone." } },
      { id: "holds", title: "Understand temporary holds", paragraphs: ["Adding an item to a cart should not consume capacity by itself. The temporary hold begins when the customer enters the payment step and the checkout timer starts."], bullets: ["One guest holds one capacity unit unless the selected product explicitly consumes more than one resource.", "Two guests should normally hold two capacity units, not four.", "An expired timer releases the hold automatically.", "A completed payment converts the hold into confirmed booked capacity."] },
      { id: "expired", title: "When a session expires in the cart", paragraphs: ["If the selected session or its sales cut-off passes before payment, checkout must stop. Remove the expired line from the cart, explain what changed, and ask the customer to select a new time."], callout: { tone: "warning", title: "Revalidate at every boundary", text: "Validate the session when it is selected, when payment begins, and again before the booking is confirmed." } },
    ],
  },
  {
    slug: "create-and-publish-an-activity",
    title: "Create and publish an activity",
    description: "Build a sellable experience with pricing, capacity, schedule, and booking rules.",
    category: "catalog-inventory",
    minutes: 8,
    updated: "2026-08-07",
    featured: true,
    keywords: ["activity", "experience", "session pass", "schedule", "pricing", "publish"],
    sections: [
      { id: "choose-type", title: "Choose the right product type", bullets: ["Activity: a standard scheduled experience.", "Session pass: time-based entry with session variations.", "Party bundle: a packaged event with included products.", "Voucher pack: prepaid redemptions.", "Membership: recurring or fixed-term access.", "Gift card: stored value for future purchases."] },
      { id: "build", title: "Build the activity", steps: ["Open Catalog → Activities and select Create.", "Add a clear customer-facing name, description, image, and category.", "Configure duration, capacity, eligible zones, price, taxes, and refund rules.", "Add required waivers, forms, extras, or inventory items.", "Save the activity, then create its sessions in Session Planner."] },
      { id: "publish", title: "Publish and verify", paragraphs: ["Preview the customer booking portal, search the intended date, and complete a test booking. If the activity is missing, check its status, schedule, sales window, zone capacity, and portal assignment."], callout: { tone: "success", title: "Publishing checklist", text: "An activity is sellable only when the product, schedule, capacity, and booking portal are all active." } },
    ],
  },
  {
    slug: "manage-inventory-extras-and-promos",
    title: "Manage inventory, extras, and promos",
    description: "Keep stock accurate, attach optional extras, and create discounts without unintended overlap.",
    category: "catalog-inventory",
    minutes: 6,
    updated: "2026-08-07",
    keywords: ["inventory", "stock", "extras", "addons", "promo", "discount"],
    sections: [
      { id: "inventory", title: "Inventory basics", paragraphs: ["Create each physical item once, assign it to the correct park, and set its sale price, tax treatment, reorder level, and available quantity."], bullets: ["Use consistent SKU names.", "Record adjustments instead of overwriting unexplained differences.", "Review low-stock items before busy sessions."] },
      { id: "extras", title: "Attach extras", steps: ["Create the extra in Catalog → Extras.", "Set its price and stock behavior.", "Attach it only to eligible activities or bundles.", "Test it in the booking flow and POS."] },
      { id: "promos", title: "Create a safe promotion", paragraphs: ["Define the discount type, value, eligible products, customer conditions, usage limit, and active dates. Avoid overlapping automatic promotions unless stacking is intentional."], callout: { tone: "warning", title: "Test the total", text: "Before sharing a promo code, place a test order and verify discount, tax, and refund behavior." } },
    ],
  },
  {
    slug: "create-and-manage-promotions",
    title: "Create and manage promotions",
    description: "Build a promo, choose eligible products and channels, set usage limits, and understand its live status.",
    category: "catalog-inventory",
    minutes: 9,
    updated: "2026-09-28",
    featured: true,
    keywords: ["promo", "promotion", "discount code", "eligible activities", "sales channels", "expiry", "usage limit"],
    sections: [
      { id: "offer", title: "1. Set up the offer", steps: ["Open Catalog → Promos and choose Create New Promo.", "Enter a customer-facing name and a unique promo code.", "Choose percentage or fixed amount and enter the discount value.", "Select specific eligible activities, or leave the list empty to apply the promo to every eligible activity."], callout: { tone: "info", title: "Eligible activities are optional", text: "Leave the field empty only when the business truly intends the promo to work across every eligible activity." } },
      { id: "dates", title: "2. Add booking and redemption rules", bullets: ["Booking cut-off controls the last date the code can be entered.", "Redemption dates control when the booked activity may occur.", "Selected weekdays and times narrow redemption to specific sessions.", "The park timezone is used for every date and time comparison."] },
      { id: "channels", title: "3. Choose real sales channels", paragraphs: ["Only select channels enabled for the active park. Typical supported channels are Point of sale and Online checkout; unavailable kiosk or park-manager channels should not be offered."], bullets: ["When the channel rule is off, the promo can be used in every supported channel.", "When it is on, at least one available channel must be selected."] },
      { id: "limits", title: "4. Set usage limits", bullets: ["Per code limits the total uses of that promo code.", "Per customer limits repeat use by the same customer.", "Per booking rules limit how many discounted items can be included in one checkout.", "Allow multiple uses only when the offer is designed to stack inside the same booking."] },
      { id: "status", title: "Read promo status", paragraphs: ["The promo list should display a readable Active, Scheduled, Expired, or Inactive status together with its expiry date. A numeric status value is not customer- or staff-friendly."], callout: { tone: "success", title: "Example", text: "SUMMER20 gives 20% off selected Session Passes online, Monday–Friday from 10:00 to 17:00, until 31 August, with one use per customer." } },
    ],
  },
  {
    slug: "manage-customer-profiles",
    title: "Create and manage customer profiles",
    description: "Keep customer details accurate and understand memberships, vouchers, forms, and booking history.",
    category: "customers-products",
    minutes: 5,
    updated: "2026-08-07",
    featured: true,
    keywords: ["customer", "profile", "duplicate", "booking history", "contact"],
    sections: [
      { id: "create", title: "Create a customer", steps: ["Open Customers and select Add Customer.", "Search existing customers by email and phone first.", "Enter name and valid contact information.", "Add optional address, birthday, tags, or notes only when relevant.", "Save and confirm the customer appears in the active park."] },
      { id: "profile", title: "Understand the profile", bullets: ["Overview: contact details and account summary.", "Bookings: reservation history and upcoming visits.", "Memberships, gift cards, and vouchers: issued products and balances.", "Forms and waivers: completed customer documents.", "CRM activity: messages, tags, and engagement where enabled."] },
      { id: "missing", title: "A customer was created but is missing", paragraphs: ["Confirm the active park, clear search filters, and search the exact email address. Customer visibility is park-scoped; a profile created in one park may not appear in another unless it is linked there."], callout: { tone: "warning", title: "Avoid duplicates", text: "Do not create a second profile until you have searched by both email and phone." } },
    ],
  },
  {
    slug: "gift-cards-vouchers-and-memberships",
    title: "Gift cards, voucher packs, and memberships",
    description: "Issue, find, and use customer products while keeping balances and status clear.",
    category: "customers-products",
    minutes: 7,
    updated: "2026-09-28",
    keywords: ["gift card", "voucher", "membership", "balance", "redeem"],
    sections: [
      { id: "difference", title: "Choose the correct product", bullets: ["Gift card: stored monetary value used to pay for eligible purchases.", "Voucher pack: a prepaid number of redemptions for selected activities.", "Membership: recurring or fixed-term access and discounts linked to a member."] },
      { id: "issue", title: "Issue to a customer", steps: ["Create and publish the product in Catalog.", "Open the customer profile or complete an eligible sale.", "Select the correct product and verify price, currency, validity, and recipient.", "Complete payment and confirm the issued record appears under Customers."] },
      { id: "purchase-versus-issue", title: "Product versus issued record", paragraphs: ["A catalog product defines what can be sold. The Customers lists show records that have actually been issued after a completed purchase or a staff-issued transaction."], callout: { tone: "info", title: "Why a gift product can exist with zero cards", text: "Creating a Gift Card product does not create an issued card. Complete a sale or issue it to a customer before it appears in the issued Gift Cards list." } },
      { id: "troubleshoot", title: "When an issued product does not load", paragraphs: ["Confirm the active park and module access, then clear filters and retry. If the request is cancelled or times out, capture the page URL, customer email, approximate time, and browser network request before contacting support."], callout: { tone: "info", title: "Do not reissue immediately", text: "Check the customer profile and payment history first to avoid creating duplicate value." } },
    ],
  },
  {
    slug: "create-and-configure-memberships",
    title: "Create and configure a membership",
    description: "Set up membership content, pricing plans, included benefits, sales rules, and checkout details from end to end.",
    category: "customers-products",
    minutes: 12,
    updated: "2026-09-28",
    featured: true,
    keywords: ["membership", "membership plan", "benefits", "recurring", "redemption", "purchase limits", "checkout rules", "minimum payments"],
    sections: [
      { id: "example", title: "Example used in this guide", paragraphs: ["Create a Family Fun Membership with a $69 monthly Family plan. Members receive 20% off selected Session Passes once per day, can cancel after three successful payments, and may add Grip Socks during checkout."], callout: { tone: "success", title: "Before you begin", text: "Create the products used by a benefit or extra before configuring the membership." } },
      { id: "content", title: "1. Add customer-facing content", steps: ["Open Customers → Memberships and select Create Membership.", "Enter the membership name and short description.", "Optionally enable a detailed description and image.", "Add consistent tags for internal search and management.", "Continue to Membership plans."], bullets: ["Name is required and appears across Admin, POS, and online checkout.", "The short description should explain the value in one sentence.", "The detailed description is best for eligibility, exclusions, and member expectations."] },
      { id: "plans", title: "2. Create a membership plan", paragraphs: ["A membership is the product; plans are the pricing choices inside it. You can offer Individual, Family, or Annual plans under one membership."], steps: ["Select Create Plan or edit the default Individual Membership plan.", "Enter a plan name, price, and payment frequency.", "For a custom frequency, enter the repeat interval and unit.", "Save the plan only after its benefits and restrictions are complete."], bullets: ["One-off payment creates a fixed purchase.", "Per day, week, month, or year creates recurring billing.", "Custom supports intervals such as every three months."] },
      { id: "benefits", title: "Configure included benefits", paragraphs: ["Each benefit needs both a value and at least one selected product. Use the product selector to search across Session Passes, Party Bundles, Extras, Inventory, and Voucher Packs."], steps: ["Choose percentage or fixed-amount discount.", "Enter the value, such as 20% or $10.", "Select the eligible products in the popup and apply them.", "Set the redemption quantity and period, such as 1 per day.", "Optionally add a concise POS benefit name.", "Use Add benefit for additional entitlements."], callout: { tone: "info", title: "Benefit example", text: "20% off the 60 Minute Session Pass, redeemable once per day, with the POS label “Family member session discount”." } },
      { id: "plan-rules", title: "Set plan purchase and validity rules", bullets: ["Purchase limits cap the minimum and maximum quantity in one checkout.", "Make ticket compulsory marks the plan as required in the associated purchase flow.", "Days valid from purchase or redemption apply to one-off plans; recurring billing controls recurring-plan validity.", "Purchase date range controls when this particular plan may be bought.", "Redemption date range, weekdays, and times control when its benefits may be used.", "Reporting category changes where plan revenue is grouped.", "Hide from online sales makes the plan available only to staff channels."] },
      { id: "sales", title: "3. Configure sales and cancellation", steps: ["Choose whether eligible membership transactions may be refunded.", "Select an online sales period or leave it as Anytime.", "Choose Cancel anytime, End of billing cycle, After minimum payments, or Staff approval required.", "When using minimum payments, enter at least one successful payment.", "Continue to Checkout."], callout: { tone: "warning", title: "Sales period is different from plan purchase dates", text: "The membership sales period controls the whole product. A plan purchase range can narrow one plan further; both rules must allow the purchase." } },
      { id: "checkout", title: "4. Finish checkout rules", steps: ["Enable Extras and select items customers may add while buying the membership.", "Enable Instructions for information sent in the confirmation email.", "Enable Terms and conditions for membership-specific rules shown after location terms.", "Review each completed step and create the membership."], callout: { tone: "success", title: "Complete example", text: "Family Fun Membership → Family Monthly → $69 per month → 20% off selected Session Passes → 1 redemption per day → cancel after 3 payments → optional Grip Socks." } },
      { id: "customer-journey", title: "What the customer experiences", steps: ["The customer finds the membership in the online catalog.", "They select an available plan and any extras.", "They accept terms and complete payment.", "The issued membership appears on the customer account.", "At a later booking, the customer applies the membership and receives the eligible benefit within its redemption rules."] },
    ],
  },
  {
    slug: "set-up-and-publish-a-waiver",
    title: "Set up and publish a waiver",
    description: "Create the customer agreement, signing rules, captured data, and published version required by booking flows.",
    category: "customers-products",
    minutes: 8,
    updated: "2026-09-28",
    keywords: ["waiver", "agreement", "signature", "minors", "expiry", "publish", "no active waiver"],
    sections: [
      { id: "open", title: "Open Waiver Setup", steps: ["Open Connected Apps → Waiver Setup.", "Enter the customer-facing agreement name.", "Optionally add a header image.", "Write the agreement content and add every required checkbox statement."] },
      { id: "rules", title: "Configure signing rules", bullets: ["Require digital signature when a drawn or typed signature is mandatory.", "Include minors by default when guardians normally sign for attending children.", "Set Valid for to control how many days a signed waiver remains active.", "Set the minimum signing age; younger customers require a parent or guardian.", "Enable expiry reminders only when customer email delivery is configured."] },
      { id: "data", title: "Choose customer data", paragraphs: ["Name, email, and date of birth are captured by the standard flow. Enable address or a custom agreement form only when the park requires additional information."], callout: { tone: "warning", title: "Collect only what you need", text: "Avoid unnecessary personal data. Every additional field should have a clear operational or legal purpose." } },
      { id: "publish", title: "Save and publish", steps: ["Choose Save for future signers for routine changes, or Ask everyone to re-sign for a major legal revision.", "Save a draft and review the customer-facing agreement.", "Publish changes to create the active waiver.", "Copy the agreement link and test it in a private browser window."], callout: { tone: "info", title: "No active waiver configured", text: "This message means a draft exists or no waiver has been published for the selected park. Publish the agreement before retrying the booking." } },
    ],
  },
  {
    slug: "configure-pos-and-card-readers",
    title: "Configure POS terminals and card readers",
    description: "Route the POS channel, create tills, pair readers, and verify card-present payments.",
    category: "payments-pos",
    minutes: 9,
    updated: "2026-08-07",
    featured: true,
    keywords: ["POS", "terminal", "reader", "pairing code", "gateway", "Stripe", "Nuvei"],
    sections: [
      { id: "requirements", title: "Before adding a terminal", bullets: ["The POS module must be assigned to the park in Movira Control.", "A compatible park payment credential must be saved and successfully tested.", "The POS / card terminal channel must be routed to that provider.", "Demo parks use sandbox credentials; production parks use live credentials."] },
      { id: "terminal", title: "Create a till and reader", steps: ["Open Connected Apps → POS / Terminals.", "Select Add Terminal and enter a recognizable till name.", "Use the generated one-time pairing code to connect the cashier device.", "Add a card reader under that terminal.", "Register a real reader with the provider code or use a simulator only in demo mode.", "Set one reader as the default and run a small test payment."] },
      { id: "pairing", title: "About pairing codes", paragraphs: ["A pairing code links a cashier device to a specific terminal. It is short-lived and should be treated like a temporary password. Regenerate it if it expires or was exposed."], callout: { tone: "warning", title: "Reader is not the till", text: "A terminal is the cashier station. A reader is the physical or simulated card device attached beneath it." } },
    ],
  },
  {
    slug: "take-payments-and-send-payment-links",
    title: "Take payments and send payment links",
    description: "Choose the correct payment channel and safely recover when a customer has not completed payment.",
    category: "payments-pos",
    minutes: 6,
    updated: "2026-08-07",
    keywords: ["payment", "payment link", "cash", "card", "outstanding", "resend"],
    sections: [
      { id: "channels", title: "Use the correct channel", bullets: ["Online booking: checkout on the public booking portal.", "Payment link: a secure hosted link sent to a customer.", "POS / card terminal: in-person card-present transactions.", "Recurring: scheduled membership payments where enabled."] },
      { id: "link", title: "Send or resend a payment link", steps: ["Open the booking or SaaS invoice with an outstanding balance.", "Select Send payment link.", "Confirm the recipient email, amount, currency, and expiry.", "Send the link and review the event history.", "Use Resend only if the existing invoice remains unpaid."] },
      { id: "safety", title: "Payment safety", paragraphs: ["Never ask a customer to send card details by email or chat. Movira stores provider references rather than displaying full card credentials."], callout: { tone: "warning", title: "Live versus sandbox", text: "Sandbox transactions cannot make a production park live or settle real funds." } },
    ],
  },
  {
    slug: "refund-a-payment",
    title: "Refund a payment",
    description: "Review eligibility, submit a full or partial refund, and confirm provider status.",
    category: "payments-pos",
    minutes: 5,
    updated: "2026-08-07",
    keywords: ["refund", "partial refund", "void", "payment history"],
    sections: [
      { id: "review", title: "Review before refunding", bullets: ["Confirm the original transaction succeeded.", "Check the refundable balance and policy.", "Review previous refunds and pending operations.", "Confirm whether booked items also need cancellation or inventory restoration."] },
      { id: "submit", title: "Submit the refund", steps: ["Open the booking Payments tab or Refund Operations queue.", "Choose full or partial refund.", "Enter the amount and a clear internal reason.", "Confirm once and wait for the provider response.", "Review payment history and customer notification status."] },
      { id: "pending", title: "If a refund is pending", paragraphs: ["Do not submit another refund. Provider processing can be asynchronous. Refresh the operation after a short interval and escalate with the booking number and transaction reference if the status does not resolve."], callout: { tone: "warning", title: "Refunds are financial actions", text: "Only users with explicit refund permission should perform this workflow." } },
    ],
  },
  {
    slug: "build-and-publish-a-staff-schedule",
    title: "Build and publish a staff schedule",
    description: "Create positions, assign shifts, resolve conflicts, and publish the schedule to your team.",
    category: "workforce",
    minutes: 7,
    updated: "2026-08-07",
    keywords: ["staff", "schedule", "shift", "position", "publish"],
    sections: [
      { id: "prepare", title: "Prepare the schedule", steps: ["Create the positions used at the park.", "Confirm each team member’s position, availability, and employment status.", "Review Workforce Settings for opening hours, breaks, approvals, and labor guardrails."] },
      { id: "build", title: "Build and publish", steps: ["Open Staff → Schedule and choose the week.", "Add shifts or apply a shift template.", "Assign team members and resolve overlaps, availability conflicts, or labor warnings.", "Review open shifts and estimated labor cost.", "Publish when the schedule is complete."] },
      { id: "changes", title: "Handle changes", paragraphs: ["After publishing, notify affected team members when editing or deleting shifts. Use the marketplace and approval flow for offers, swaps, and open-shift claims."], callout: { tone: "info", title: "Draft versus published", text: "Draft schedules are planning data. Employees should act only on the latest published schedule." } },
    ],
  },
  {
    slug: "time-clock-leave-and-approvals",
    title: "Time clock, leave, and approvals",
    description: "Manage attendance exceptions, timesheets, leave requests, availability, and shift transfers.",
    category: "workforce",
    minutes: 6,
    updated: "2026-08-07",
    keywords: ["time clock", "timesheet", "leave", "availability", "approval"],
    sections: [
      { id: "attendance", title: "Attendance workflow", steps: ["Employees clock in and out against the active park and scheduled shift.", "Managers review late arrivals, no-shows, missing clock-outs, and break exceptions.", "Correct entries with a reason and retain approval history.", "Approve timesheets before payroll export."] },
      { id: "leave", title: "Leave and availability", bullets: ["Availability indicates when a team member can normally work.", "Time off is a dated leave request requiring the configured approval.", "Shift marketplace handles offers, swaps, and open-shift claims."] },
      { id: "reports", title: "Payroll readiness", paragraphs: ["Before exporting Payroll CSV, confirm the date range, resolve attendance exceptions, approve timesheets, and review overtime. The export reflects the active park only."], callout: { tone: "warning", title: "Timezone matters", text: "Incorrect park timezone or schedule settings can shift attendance and payroll dates." } },
    ],
  },
  {
    slug: "send-a-campaign",
    title: "Create and send a CRM campaign",
    description: "Choose an audience, build content, run preflight checks, control delivery, and monitor campaign results.",
    category: "crm-communications",
    minutes: 10,
    updated: "2026-10-04",
    featured: true,
    keywords: ["CRM", "campaign", "email", "audience", "template", "drip", "pause", "stop", "RSS"],
    sections: [
      { id: "audience", title: "Define the audience", paragraphs: ["Start with a clear purpose and choose the smallest relevant customer segment. Review filters, exclusions, consent, and the estimated eligible recipient count before writing content."], bullets: ["Customers without an email address cannot receive an email campaign.", "Unsubscribed, complained, or suppressed addresses are excluded automatically.", "Use Customers → bulk selection → Send email when the campaign begins from a selected group of customers."] },
      { id: "campaign-type", title: "Choose the campaign type", bullets: ["Standard campaigns send one message to the eligible audience.", "Drip campaigns send configured steps over time and show enrollment progress in campaign activity.", "RSS campaigns check a feed and create sends from new eligible items using the selected segment and template.", "Customer bulk email starts from Customers; it is not a separate campaign section in the main navigation."] },
      { id: "build", title: "Build and test", steps: ["Open CRM → Marketing → Emails → Campaigns and choose Create campaign.", "Select the audience segment, verified sending domain, and marketing template.", "Add a recognizable sender name, subject, preview text, and one clear call to action.", "Use the template workspace for Design, Code, or Plain text content.", "Run the campaign preflight check and correct every blocking issue.", "Send a test to your team and check desktop and mobile rendering.", "Confirm links, merge fields, unsubscribe behavior, audience, and delivery time."] },
      { id: "delivery", title: "Choose delivery controls", bullets: ["Queue or Send now places eligible recipients into the delivery queue.", "Schedule sends at the chosen date and time using the park timezone.", "Delivery windows restrict marketing email to the configured days and hours.", "Pause prevents additional queued messages from being dispatched; Resume continues them.", "Stop cancels recipients that have not started sending and cannot recall messages already accepted by the provider."] },
      { id: "monitor", title: "Monitor delivery and results", paragraphs: ["Use Statistics for delivery, opens, clicks, bounces, complaints, unsubscribes, and conversions. Open Campaign activity for recipient-level progress and events. Failed Inbox contains messages that need attention; Queue Monitor and Audit Logs provide operational detail when deeper diagnosis is required."], bullets: ["Queued means the message is waiting for worker capacity, a sending limit, or its delivery window.", "Failed messages include the last recorded reason and may offer a controlled retry.", "Paused and stopped are campaign controls; they do not recall email already accepted by the provider.", "Do not repeatedly resend to bounced, complained, unsubscribed, or suppressed contacts."], callout: { tone: "info", title: "Transactional emails", text: "Booking confirmations and other system emails use the Transactional channel, templates, failed inbox, and notification-event configuration." } },
    ],
  },
  {
    slug: "manage-crm-contacts-and-filters",
    title: "Manage CRM contacts and advanced filters",
    description: "Manage customers, tags, segments, sync history, advanced filters, and bulk actions from one CRM workspace.",
    category: "crm-communications",
    minutes: 9,
    updated: "2026-10-04",
    keywords: ["CRM", "contacts", "customers", "filters", "segments", "tags", "sync history", "bulk email"],
    sections: [
      { id: "workspace", title: "Understand the Customers workspace", bullets: ["Customers contains searchable contact records, configurable columns, profiles, and bulk actions.", "Tags manages reusable labels used for search, segmentation, and automation.", "Segments stores reusable static or rule-based audiences.", "Sync History shows webhook runs, processed rows, timestamps, and row-level errors from the core customer sync."] },
      { id: "contact-data", title: "Keep contact data usable", paragraphs: ["Email is required when a CRM customer is created manually; phone is optional. A deleted core customer is removed from CRM rather than retained as a normal campaign contact."], bullets: ["Use one valid email address per customer.", "Add phone only when it is available and permitted for use.", "Use custom fields for information that does not fit a built-in field.", "Correct invalid or duplicate details before adding the customer to a campaign."] },
      { id: "filters", title: "Build an advanced filter", steps: ["Open CRM → Customers and select Advanced filters.", "Choose a field such as name, email, activity, date of birth, created date, or last activity.", "Choose an operator that matches that field.", "Select or enter the value. Fields such as activity use a searchable list of existing values.", "Add more conditions and preview the matching customers.", "Save the filter as a reusable segment when the audience will be used again."] },
      { id: "operators", title: "Use the right operator", bullets: ["Text and select fields offer only relevant choices such as is, is not, contains, starts with, ends with, filled, or not filled.", "Number fields support equal, not equal, greater or less than, inclusive comparisons, and between.", "Date operators are grouped into Fixed date, Dynamic date, and Field status.", "Fixed date includes exact date, date range, before, and after.", "Dynamic date includes today, yesterday, day of month, rolling past or future periods, exact days, weeks, or months ago, and relative date ranges.", "Date values use the shared calendar picker so the displayed format and saved date stay consistent."] },
      { id: "segments", title: "Use tags and segments", paragraphs: ["Tags describe a customer. Segments define an audience. A segment can be used by campaigns, bulk enrollment, and automation without rebuilding the same filter each time."], steps: ["Apply consistent tags to customers or use a bulk tag action.", "Create a segment from customer rules or the current advanced filter.", "Preview and refresh the segment count before a large send.", "Open the segment action menu to email or enroll its customers in a published workflow."] },
      { id: "bulk-email", title: "Email selected customers", steps: ["Select the customers on the current result set.", "Choose Send email from the bulk actions.", "Review the selected audience and exclusions.", "Create a new campaign or continue the generated draft in Marketing.", "Test, schedule, or send the campaign from the campaign workflow."], callout: { tone: "warning", title: "Selection is not consent", text: "A selected customer can still be excluded because of unsubscribe, complaint, suppression, missing email, or other delivery safeguards." } },
      { id: "sync-history", title: "Read Sync History errors", paragraphs: ["Completed with errors means the sync run finished but one or more rows were rejected. Open the run to see the row, source customer ID, timestamp, and exact validation reason."], bullets: ["“Contact requires an email” means the source customer did not provide the email required by the CRM contact rule.", "Correct the source customer and retry the sync instead of creating a duplicate CRM record.", "A completed run with zero row errors needs no manual repair."], callout: { tone: "info", title: "Location scope", text: "Customers, tags, segments, and sync history always belong to the active park. Confirm the park selector before editing or troubleshooting." } },
    ],
  },
  {
    slug: "set-up-an-email-sending-domain",
    title: "Set up and verify an email sending domain",
    description: "Add a sending subdomain, copy its DNS records correctly, and understand verification status.",
    category: "crm-communications",
    minutes: 9,
    updated: "2026-10-04",
    keywords: ["email domain", "DNS", "SPF", "DKIM", "DMARC", "verification"],
    sections: [
      { id: "choose-domain", title: "Choose a sending subdomain", paragraphs: ["Use a subdomain such as email.example.com instead of the root domain used by your main website. This separates marketing reputation from normal business mail while keeping your brand recognizable."], callout: { tone: "info", title: "One-time setup", text: "Your organization configures the domain once. Movira then uses the verified domain for approved senders in that workspace." } },
      { id: "add-records", title: "Copy the DNS records", steps: ["Open CRM → Settings → Email Setting → Dedicated Domain and add your sending subdomain.", "Open DNS records and copy each record type, Host / Name, and Required value / Target into your DNS provider.", "Movira shows a copy-ready Host / Name and the full DNS name for reference. Use the copy-ready value unless your provider explicitly asks for the full name.", "Keep CNAME and mail records set to DNS only; disable proxying, masking, or flattening for these records.", "Save every record and wait for DNS propagation."] },
      { id: "records", title: "What the records mean", bullets: ["SPF authorizes the sending service for the domain.", "DKIM records verify the message signature.", "MAIL FROM records route bounces and align the return path.", "DMARC tells receiving providers how to evaluate domain alignment and where aggregate reports go."] },
      { id: "verify", title: "Verify the setup", steps: ["Return to the DNS records dialog and choose Verify records.", "Review each record status instead of relying only on the overall badge.", "If every row is OK but the overall status is still pending, allow time for the sending provider to finish domain verification and check again.", "After the domain becomes verified, review Domain Warmup before sending a large campaign."], callout: { tone: "warning", title: "DNS changes are not instant", text: "Propagation time depends on the DNS provider and existing TTL. Repeatedly deleting and recreating correct records usually delays troubleshooting." } },
    ],
  },
  {
    slug: "understand-email-warmup-and-sending-limits",
    title: "Understand domain warmup and sending limits",
    description: "Read the warmup stages, daily allowance, usage, and capacity messages before increasing volume.",
    category: "crm-communications",
    minutes: 6,
    updated: "2026-10-04",
    keywords: ["warmup", "daily limit", "allowance", "email reputation", "capacity"],
    sections: [
      { id: "why", title: "Why warmup exists", paragraphs: ["A newly verified sending domain has little reputation. Warmup increases volume in controlled stages so mailbox providers can observe healthy engagement and low bounce and complaint rates. Completing a calendar day alone does not guarantee the next stage; sending health also matters."] },
      { id: "read-card", title: "Read the warmup card", bullets: ["Stage shows the current point in the warmup plan.", "Daily allowance is the maximum Movira currently permits for that domain today.", "Sent today shows how much of that allowance has been used.", "Remaining today is the amount still available before the next daily reset.", "Next stage explains the expected allowance after healthy completion of the current stage."] },
      { id: "large-volume", title: "Plan large sends", paragraphs: ["Do not assume a domain can send 100,000 messages immediately after the final warmup stage. Actual throughput is limited by your Movira plan, domain health, provider quota, account capacity, delivery windows, and the size of the eligible audience."], bullets: ["Split large audiences into controlled batches.", "Keep bounce and complaint rates low.", "Use Campaign Statistics and domain health before increasing volume.", "Contact Movira before a major volume increase or when dedicated sending capacity is required."] },
      { id: "blocked", title: "When sending is limited", paragraphs: ["Movira may queue or block new marketing sends when a daily allowance, plan quota, provider capacity, health threshold, or delivery window is reached. The campaign and queue screens show the applicable reason."], callout: { tone: "success", title: "After the final stage", text: "The warmup card confirms completion and shows the current operating allowance. Continue monitoring reputation; warmup completion is not unlimited sending." } },
    ],
  },
  {
    slug: "use-the-conversations-inbox",
    title: "Use the Conversations inbox",
    description: "Connect supported channels and manage real customer conversations, assignments, statuses, and replies in one inbox.",
    category: "crm-communications",
    minutes: 12,
    updated: "2026-10-04",
    featured: true,
    keywords: ["conversations", "inbox", "Facebook", "Instagram", "website chat", "routing", "SLA", "saved replies"],
    sections: [
      { id: "channels", title: "Choose a channel", bullets: ["Facebook Messenger and Instagram Direct use Meta’s secure connection flow.", "Website Chat adds the Movira chat widget to approved websites and booking portals.", "Other channels appear only when their provider setup is available for the environment; Planned or Restricted channels cannot be connected yet.", "Every connection and conversation is scoped to the active Movira location."] },
      { id: "connect", title: "Connect Facebook or Instagram", steps: ["Open CRM → Conversations → Channels and choose Connect channel.", "Select Facebook or Instagram and continue to Meta.", "Sign in with a Meta account that can manage the required Facebook Page.", "Select the Page and grant the requested messaging permissions.", "For Instagram, confirm the professional Instagram account is linked to that Facebook Page.", "Return to Movira and confirm the channel shows Connected."] },
      { id: "website-chat", title: "Set up Website Chat", steps: ["Open Channels → Website Chat.", "Choose one of the eight launcher styles, a brand colour, and a bottom-left or bottom-right position.", "Set the widget name, button label, welcome message, pre-chat message, and message placeholder.", "Set Name, Email, and Phone individually to Off, Optional, or Required.", "Add each allowed website origin with https:// on its own line.", "Choose Preview widget to check the visitor experience without keeping the preview open.", "Create the widget, then copy the generated installation code before the closing body tag on every approved page.", "Send a test message and confirm it appears in the Inbox."] },
      { id: "work", title: "Work from the unified inbox", bullets: ["Use All, Mine, Unassigned, Open, Pending, or Resolved to control the queue.", "Filter by Facebook, Instagram, WhatsApp, or Website Chat when those channels are connected.", "Assign ownership so two team members do not answer the same conversation.", "Reply or add an Internal note from the composer.", "Watch sent, delivered, read, or failed status when the provider supplies that event.", "Resolve a finished conversation; a supported new inbound message can reopen it.", "The message panel automatically stays with the newest message while the conversation is being used."] },
      { id: "manage", title: "Configure the workspace", bullets: ["Routing & SLA controls round-robin assignment, unavailable agents, fallback inbox, response targets, and routing rules.", "Saved replies stores reusable answers with a title, shortcut, category, and message body.", "Automation stores conversation-specific trigger and action rules; execution counts appear when a supported worker runs them.", "Analytics shows live conversation volume, response time, workload, resolution, SLA, and channel performance for 7, 30, or 90 days.", "Settings controls inbox behaviour, optional assistance, resolution preferences, transcript access, and the saved retention policy."] },
      { id: "troubleshoot", title: "If messages are missing or fail", bullets: ["Confirm the channel still shows Connected and the correct workspace is selected.", "For Instagram, confirm the account remains professional and linked to the selected Facebook Page.", "Refresh the inbox filters and check whether the conversation is assigned or closed.", "Open the failed message for its provider reason before retrying.", "Reconnect the channel if permissions were removed or the social account connection changed."], callout: { tone: "warning", title: "One Movira location at a time", text: "A social account cannot be actively connected to two Movira locations. Disconnect it from the old location before connecting it to another." } },
    ],
  },
  {
    slug: "manage-email-suppressions-failures-and-queues",
    title: "Manage email suppressions, failures, and queues",
    description: "Understand why an email was blocked, failed, or delayed and take the safest available action.",
    category: "crm-communications",
    minutes: 8,
    updated: "2026-10-04",
    keywords: ["suppression", "failed inbox", "queue monitor", "bounce", "complaint", "retry", "audit logs"],
    sections: [
      { id: "areas", title: "Know where to look", bullets: ["Suppressions lists recipients blocked from future outbound email and records the reason.", "Failed Inbox shows marketing or transactional messages that reached a failed state.", "Queue Monitor explains queued, processing, sent, failed, stale, or recoverable work.", "Audit Logs records important marketing actions for the active location.", "Statistics summarizes campaign outcomes; it is not the place for recipient-level recovery."] },
      { id: "suppression", title: "Understand suppression reasons", bullets: ["Unsubscribe is the recipient’s marketing choice and must not be bypassed.", "Complaint means the recipient reported mail as unwanted.", "Hard bounce or invalid means the address should not be retried until it is corrected and safe.", "Manual or admin block was added by an authorized user.", "A suppression can affect future email even when the customer remains visible in CRM."] },
      { id: "failures", title: "Review a failed message", steps: ["Open Failed Inbox and select Marketing or Transactional.", "Filter or search for the recipient or message.", "Read the last error and recent message events.", "Correct the underlying audience, template, sender, domain, provider, or address problem.", "Use Retry only when the screen offers it and the cause has been corrected."], callout: { tone: "warning", title: "Do not force unsafe retries", text: "Never release or retry an unsubscribe, complaint, or permanent bounce merely to make a campaign count increase." } },
      { id: "queue", title: "Read queue status", bullets: ["Queued means the message is waiting for processing, available capacity, a delivery window, or a scheduled time.", "Processing means a worker has started the job.", "Sent or accepted means the provider accepted it; later webhook events can still report delivery or bounce.", "Stale means the item has waited longer than the monitor threshold and needs investigation.", "Recoverable means Movira can safely offer a retry after configuration or worker availability is restored."] },
      { id: "escalate", title: "Escalate with useful details", paragraphs: ["If the reason is unclear, provide support with the active park, recipient, campaign or event name, message ID when visible, exact error, and approximate time with timezone."], callout: { tone: "info", title: "Worker health", text: "Queue Monitor is useful for diagnosis, but customers do not need to operate deployment workers. If processing is unavailable across many messages, contact your Movira administrator or support team." } },
    ],
  },
  {
    slug: "build-and-monitor-crm-automation",
    title: "Build and monitor a CRM automation",
    description: "Create a location-scoped workflow, test it safely, publish it, enroll customers, and review execution results.",
    category: "crm-communications",
    minutes: 11,
    updated: "2026-10-04",
    keywords: ["automation", "workflow", "trigger", "wait", "if else", "enrollment", "execution logs"],
    sections: [
      { id: "lifecycle", title: "Understand workflow status", bullets: ["Draft workflows can be edited and tested without accepting automatic events.", "Published workflows can respond to matching supported events and can be used for customer or segment enrollment.", "Paused workflows remain saved but should not accept new automatic enrollments.", "Enrollment History tracks bulk enrollment jobs; Execution Logs shows each customer run and its step results."] },
      { id: "build", title: "Build the workflow", steps: ["Open CRM → Automation → Builder and create a workflow.", "Choose one trigger, such as customer created, customer updated, tag added, segment joined, booking confirmed, payment received, waiver activity, or supported email engagement.", "Add supported actions such as Send email, Add tag, Remove tag, Update contact, or Create internal note.", "Use If / else to branch on a built-in or custom customer field.", "Use Wait to resume the remaining steps later through the automation queue.", "Configure every selected node and save the draft."] },
      { id: "test", title: "Test before publishing", steps: ["Choose Test workflow.", "Use the selected test customer or the most recent eligible CRM contact.", "Review each dry-run step and correct skipped or failed configuration.", "Confirm the email template, merge fields, condition values, tags, and wait duration.", "Publish only after the test result matches the intended customer journey."], callout: { tone: "info", title: "A test has no side effects", text: "The test evaluates the workflow without changing the customer or sending the real email." } },
      { id: "enroll", title: "Enroll customers safely", paragraphs: ["You can enroll a single customer, the current selection, or a segment where that action is offered. Large segment enrollments run as queued jobs rather than keeping the browser open."], bullets: ["Refresh the segment count before enrollment.", "Confirm the workflow is published and contains at least one action.", "Review Enrollment History for targeted, processed, succeeded, failed, and last-error counts.", "Completed with errors means the job finished but at least one customer run failed or was rejected."] },
      { id: "supported", title: "Use only supported actions", paragraphs: ["Email, tag changes, allowed customer-field updates, internal notes, conditions, and durable waits are implemented by the current automation engine."], bullets: ["Send SMS is skipped while the platform remains in the email-only automation phase.", "Notify team and Create task are not implemented yet.", "A skipped step is recorded in the run; it should not be treated as a successful action."], callout: { tone: "warning", title: "Coming soon is not active", text: "Do not build a production workflow around an action marked parked, skipped, or coming soon." } },
    ],
  },
  {
    slug: "configure-transactional-notifications",
    title: "Configure transactional notifications",
    description: "Connect system events to the right templates and verify customer-facing messages.",
    category: "crm-communications",
    minutes: 8,
    updated: "2026-10-04",
    keywords: ["transactional", "notification", "email", "template", "event", "binding", "failed inbox"],
    sections: [
      { id: "events", title: "Understand event bindings", paragraphs: ["Transactional notifications are triggered by product events such as booking confirmation, payment, waiver request, refund, or access invitation. Each enabled event should point to the intended approved transactional template."], bullets: ["An event binding decides whether the notification is enabled and which template it uses.", "Marketing templates and transactional templates are separate channels.", "Use only the merge variables supported by the selected event.", "Keep a consistent header, footer, support contact, and Powered by Movira360 mark."] },
      { id: "configure", title: "Configure an event", steps: ["Open CRM → Settings → Notification Events.", "Find the product event and open its binding.", "Enable or disable delivery as required.", "Select the approved transactional template.", "Save the binding and reopen it to confirm the selection persisted."] },
      { id: "test", title: "Test a notification", steps: ["Preview the template with realistic sample data.", "Trigger the event using a test customer and test booking or payment.", "Check recipient, subject, merge fields, links, inbox rendering, and mobile layout.", "Open the Transactional queue or Failed Inbox if the message does not arrive."] },
      { id: "not-sent", title: "When email is not sent", paragraphs: ["Check that the event is enabled, the binding has a valid template, the recipient has a valid email, the email provider and sending domain are ready, and the message is not failed or suppressed."], bullets: ["Skipped or recoverable items may be available in the Transactional queue monitor.", "Failed items show their last error in Failed Inbox.", "Record the event type, recipient, time, message ID, and exact error before retrying."], callout: { tone: "warning", title: "Access and delivery", text: "Transactional delivery follows the saved event and platform configuration; it does not depend on a user keeping the CRM screen open." } },
    ],
  },
  {
    slug: "manage-users-roles-and-permissions",
    title: "Manage users, roles, and permissions",
    description: "Give every team member the access they need without exposing unrelated modules or parks.",
    category: "admin-troubleshooting",
    minutes: 7,
    updated: "2026-09-28",
    featured: true,
    keywords: ["user", "role", "permission", "module", "access", "security"],
    sections: [
      { id: "access-model", title: "How access works", paragraphs: ["A user can open a feature only when the selected park owns the module and the assigned role grants the required action. Park assignment, module entitlement, and role permission work together."], bullets: ["Park assignment controls which parks appear.", "Module entitlement controls which product areas exist for that park.", "Role permission controls View, Create, Edit, Delete, and other supported actions inside those areas.", "The same action permission controls list buttons and direct routes; hiding a button alone is not authorization."] },
      { id: "protected-roles", title: "Protected roles and users", bullets: ["Super Admin has all platform permissions and its role assignment is read-only.", "The park Owner receives the permissions made available to that park and can manage local roles.", "Super Admin and Owner cannot be deleted from their protected scope.", "Protected Super Admin and Admin permission sets are visible as read-only rather than editable checkboxes.", "A park owner does not see the platform Super Admin role in local role management."] },
      { id: "create", title: "Create safe access", steps: ["Open Admin → Roles & Permissions and create or review a custom role.", "Grant only the required View, Create, Edit, Delete, approve, refund, or administrative actions.", "Save, reopen the role, and confirm the selected permissions remain checked.", "Open Admin → Users and create the user.", "Assign the correct park or parks and a permitted role.", "Ask the user to sign in and confirm the visible navigation and row actions."] },
      { id: "actions", title: "Understand listing actions", paragraphs: ["Create buttons and View, Edit, Delete, Activate, or Deactivate row actions appear only when the current user has the matching permission. Some records, such as owner-managed locations, may allow Edit while Delete remains intentionally unavailable."], callout: { tone: "info", title: "Permission updates should not sign you out", text: "After saving a role, the current session should refresh its effective permissions. An unexpected logout indicates an authorization or session-refresh problem, not a successful permissions update." } },
      { id: "missing-module", title: "A menu or action is missing", paragraphs: ["Check the active park, the park’s assigned modules, the user’s park assignment, the role permission, and whether the record is protected. Directly entering a hidden URL must not bypass these controls."], callout: { tone: "success", title: "Least privilege", text: "Start with the minimum access required and add permissions only when the workflow needs them." } },
    ],
  },
  {
    slug: "troubleshoot-common-issues",
    title: "Troubleshoot common issues",
    description: "A fast checklist for loading failures, missing data, access errors, and changes that do not save.",
    category: "admin-troubleshooting",
    minutes: 7,
    updated: "2026-08-07",
    featured: true,
    keywords: ["error", "loading", "failed", "retry", "validation", "403", "404", "troubleshoot"],
    sections: [
      { id: "first", title: "Start with these checks", steps: ["Confirm the correct park is selected.", "Clear page filters and search again.", "Refresh once and wait for the request to finish.", "Confirm your role and the park’s module access.", "Try the same action in a private browser window to rule out stale local state."] },
      { id: "errors", title: "Understand common errors", bullets: ["400 / validation: a required or incorrectly formatted field needs attention.", "401: the session expired; sign in again.", "403: the user, role, park, or module does not allow the action.", "404: the route or record does not exist in the selected scope.", "Request failed or timeout: the service, network, or upstream provider did not respond successfully."] },
      { id: "report", title: "Collect useful details", paragraphs: ["Include the page URL, active park, affected record number, exact action, exact error message, date and time, and a screenshot. Never include passwords, payment secret keys, full card data, or session tokens."], callout: { tone: "warning", title: "Protect sensitive data", text: "Movira support will never ask you to send a password or payment credential in a ticket." } },
    ],
  },
  {
    slug: "contacting-support",
    title: "Contact Movira support",
    description: "Send a complete support request so the team can diagnose the issue quickly and safely.",
    category: "admin-troubleshooting",
    minutes: 3,
    updated: "2026-08-07",
    keywords: ["contact", "support", "ticket", "help", "incident"],
    sections: [
      { id: "before", title: "Before contacting support", paragraphs: ["Check the relevant guide and the common troubleshooting checklist. If the issue affects payments, avoid repeated retries until you have confirmed transaction status."] },
      { id: "include", title: "What to include", bullets: ["Your name, park, and a safe contact method.", "The exact page URL and action you attempted.", "Booking, invoice, customer, terminal, or ticket reference.", "Exact error text and approximate time with timezone.", "Screenshot with sensitive data hidden.", "Whether all users or only one user are affected."] },
      { id: "priority", title: "Choose the right priority", bullets: ["Urgent: park-wide outage, safety impact, or confirmed inability to take payments.", "High: a major workflow is blocked with no reasonable workaround.", "Medium: degraded behavior with a workaround.", "Low: question, cosmetic issue, or improvement request."], callout: { tone: "info", title: "Security report", text: "For suspected unauthorized access or exposed credentials, stop using the credential, rotate it, and mark the ticket urgent." } },
    ],
  },
];

export function getCategory(slug: string) {
  return categories.find((category) => category.slug === slug);
}

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export function getArticlesByCategory(category: string) {
  return articles.filter((article) => article.category === category);
}

export function getRelatedArticles(article: Article, limit = 3) {
  return articles.filter((item) => item.category === article.category && item.slug !== article.slug).slice(0, limit);
}

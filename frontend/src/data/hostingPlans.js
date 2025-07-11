export const hostingPlans = {
  "Web Hosting": [
    { title: "Single Web Hosting", price: "£1.49/mo", original: "£10.99", discount: "SAVE 86%", websites: "1 Website", visits: "~10 000 Visits Monthly", storage: "50 GB SSD" },
    { title: "Premium Web Hosting", price: "£2.99/mo", original: "£11.99", discount: "SAVE 75%", websites: "25 Websites", visits: "~25 000 Visits Monthly", storage: "100 GB SSD" },
    { title: "Business Web Hosting", price: "£3.99/mo", original: "£14.99", discount: "SAVE 73%", websites: "50 Websites", visits: "~100 000 Visits Monthly", storage: "200 GB SSD", popular: true },
  ],
  "Cloud Hosting": [
    { 
        cpu: '2',
        ram: '3 GB',
        storage: '100 GB NVMe',
        inodes: '2,000,000',
        phpWorkers: '100',
        websites: '100',
        oldPrice: '£22.99',
        price: '£7.99',
        promo: '+ 3 months free',
        renewNote: '£20.99/mo when you renew',
        features: [
        'Domain included (Free)',
        'Unlimited SSL',
        '10 mailboxes per website – Free for 1 year',
        'CDN included',
        'Dedicated IP address',
        'Priority 24/7 expert support'
        ]
     },
     { 
        cpu: '4',
        ram: '6 GB',
        storage: '100 GB NVMe',
        inodes: '2,000,000',
        phpWorkers: '100',
        websites: '200',
        oldPrice: '£44.99',
        price: '£55.99',
        promo: '+ 3 months free',
        renewNote: '£20.99/mo when you renew',
        features: [
        'Domain included (Free)',
        'Unlimited SSL',
        '10 mailboxes per website – Free for 1 year',
        'CDN included',
        'Dedicated IP address',
        'Priority 24/7 expert support'
        ]
     },
     { 
        cpu: '8',
        ram: '16 GB',
        storage: '100 GB NVMe',
        inodes: '2,000,000',
        phpWorkers: '100',
        websites: '300',
        oldPrice: '£66.99',
        price: '£77.99',
        promo: '+ 3 months free',
        renewNote: '£20.99/mo when you renew',
        features: [
        'Domain included (Free)',
        'Unlimited SSL',
        '10 mailboxes per website – Free for 1 year',
        'CDN included',
        'Dedicated IP address',
        'Priority 24/7 expert support'
        ]
     },
  ],
  "Agency Hosting": [],
};

# ration
Ration App built with Sails Framework Javascript &amp; APIs Mailgum, Stripe

> ls .tmp/uploads/
> sails generate action things/download-photo
> sails lift
> sails console --redis --drop
> sails console --redis
> npm install sails-hook-uploads
> npm run lint

> Thing.find().log()
> Thing.createEach([{ owner: 2, label: 'Rad mountain bike' }, { owner: 2, label: 'This kenny G album'}]).log()
> Thing.create({ owner: 3, label: 'Lawer Mower that matches the grass'}).log()

Result:

[ { createdAt: 1533724185618,
    updatedAt: 1533724185618,
    id: 1,
    label: 'Rad mountain bike',
    owner: 2 },
  { createdAt: 1533724185618,
    updatedAt: 1533724185618,
    id: 2,
    label: 'This kenny G album',
    owner: 2 },
  { createdAt: 1533724534818,
    updatedAt: 1533724534818,
    id: 3,
    label: 'Lawer Mower that matches the grass',
    owner: 3 } ]

> User.find().log()

Result:

[ { createdAt: 1534161334780,
    updatedAt: 1534161334780,
    id: 7,
    emailAddress: 'admin@example.com',
    password: '$2a$10$QRb05UVrdFHG8qjKvXRlXuWXHo6kxjyDqKzhFt/mh7HzKuihjSRCy',
    fullName: 'Ryan Dahl',
    isSuperAdmin: true,
    passwordResetToken: '',
    passwordResetTokenExpiresAt: 0,
    stripeCustomerId: '',
    hasBillingCard: false,
    billingCardBrand: '',
    billingCardLast4: '',
    billingCardExpMonth: '',
    billingCardExpYear: '',
    emailProofToken: '',
    emailProofTokenExpiresAt: 0,
    emailStatus: 'confirmed',
    emailChangeCandidate: '',
    tosAcceptedByIp: '',
    lastSeenAt: 0 },
  { createdAt: 1534161342025,
    updatedAt: 1534240717439,
    id: 8,
    emailAddress: 'mikemcneil@example.com',
    password: '$2a$10$HXe/K0q.u2jBJHt7bTZ8VuEInSWyhkVRPawBAcGB6cqW1jXqQBnEe',
    fullName: 'Mike McNeil',
    isSuperAdmin: false,
    passwordResetToken: '',
    passwordResetTokenExpiresAt: 0,
    stripeCustomerId: '',
    hasBillingCard: false,
    billingCardBrand: '',
    billingCardLast4: '',
    billingCardExpMonth: '',
    billingCardExpYear: '',
    emailProofToken: '',
    emailProofTokenExpiresAt: 0,
    emailStatus: 'confirmed',
    emailChangeCandidate: '',
    tosAcceptedByIp: '',
    lastSeenAt: 1534240717438 },
  { createdAt: 1534161348931,
    updatedAt: 1534161348931,
    id: 9,
    emailAddress: 'admin2@example.com',
    password: '$2a$10$UjaESi2FQvMAqqltBrzkNuwfsPSs8y66og/Nzj9ZIEd.S5.kk0Q2K',
    fullName: 'Ryan 2 Dahl',
    isSuperAdmin: true,
    passwordResetToken: '',
    passwordResetTokenExpiresAt: 0,
    stripeCustomerId: '',
    hasBillingCard: false,
    billingCardBrand: '',
    billingCardLast4: '',
    billingCardExpMonth: '',
    billingCardExpYear: '',
    emailProofToken: '',
    emailProofTokenExpiresAt: 0,
    emailStatus: 'confirmed',
    emailChangeCandidate: '',
    tosAcceptedByIp: '',
    lastSeenAt: 0 } ]

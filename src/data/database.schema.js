/* ================================================================ */
/*  Users collection data schema                                    */
/* ================================================================ */
export const UsersData = [
	{
		displayName: 'John Doe',
		email: 'john@email.com',
		createdAt: '2020-04-08T23:02:54.402Z',
		firstName: 'John',
		lastName: 'Doe',
		avatar: '',
		company: '',
		role: '',
	},
];

/* ================================================================ */
/*  Users collection data schema                                    */
/* ================================================================ */
export const UnitsData = [
	{
		unit: 'kg',
	},
	{
		unit: 'gram',
	},
	{
		unit: 'liter',
	},
	{
		unit: 'cl',
	},
	{
		unit: 'ml',
	},
	{
		unit: 'pieces',
	},
	{
		unit: 'oz',
	},
	{
		unit: 'pound',
	},
];

/* ================================================================ */
/*  Menus collection data schema                                    */
/* ================================================================ */
export const MenusData = [
	{
		name: 'Cheese Burger Menu',
		price: 4.99,
		description:
			'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth.',
		createdAt: '2020-03-16T01:17:15.657Z',
		createdById: '4OMpNYZ1M8ejKIqrDbvhYYVpf2K3',
		updatedAt: '2020-03-17T01:17:15.657Z',
		updatedById: '4OMpNYZ1M8ejKIqrDbvhYYVpf2K3',
		itemsId: [
			{
				id: 'OmGjAwVujx5q4YerE2O1',
				quantity: 5,
			},
			{
				id: 'SGrquI6Ebfe3cb8Fof4s',
				quantity: 5,
			},
		],
	},
	{
		name: 'Hamburger Menu',
		price: 4.99,
		description:
			'The master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.',
		createdAt: '2020-03-16T02:17:15.657Z',
		createdById: '4OMpNYZ1M8ejKIqrDbvhYYVpf2K3',
		updatedAt: '2020-03-17T03:17:15.657Z',
		updatedById: '4OMpNYZ1M8ejKIqrDbvhYYVpf2K3',
		itemsId: [],
	},
	{
		name: 'Chicken Burger Menu',
		price: 5.99,
		description:
			'The master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.',
		createdAt: '2020-03-16T03:17:15.657Z',
		createdById: '4OMpNYZ1M8ejKIqrDbvhYYVpf2K3',
		updatedAt: '2020-03-17T02:17:15.657Z',
		updatedById: '4OMpNYZ1M8ejKIqrDbvhYYVpf2K3',
		itemsId: [],
	},
	{
		name: 'Kapsalon Menu',
		price: 3.99,
		description:
			'Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.',
		createdAt: '2020-03-16T04:17:15.657Z',
		createdById: '4OMpNYZ1M8ejKIqrDbvhYYVpf2K3',
		updatedAt: '2020-03-17T03:17:15.657Z',
		updatedById: '4OMpNYZ1M8ejKIqrDbvhYYVpf2K3',
		itemsId: [],
	},
];

/* ================================================================ */
/*  Items collection data schema                                    */
/* ================================================================ */
export const ItemsData = [
	{
		name: 'Onions',
		price: 1.99,
		quantity: 10,
		cost: 19.9,
		unitId: '3VTdpmMKHIeHpQQbLmin',
		createdAt: '2020-03-16T03:15:15.657Z',
		createdById: '4OMpNYZ1M8ejKIqrDbvhYYVpf2K3',
		updatedAt: '2020-03-16T03:15:15.657Z',
		updatedById: '4OMpNYZ1M8ejKIqrDbvhYYVpf2K3',
	},
	{
		name: 'Tomatoes',
		price: 0.99,
		quantity: 10,
		cost: 9.9,
		unitId: '4LikiavzAPTCssnkFN1r',
		createdAt: '2020-03-16T03:16:15.657Z',
		createdById: '4OMpNYZ1M8ejKIqrDbvhYYVpf2K3',
		updatedAt: '2020-03-16T03:16:15.657Z',
		updatedById: '4OMpNYZ1M8ejKIqrDbvhYYVpf2K3',
	},
	{
		name: 'Cheese',
		price: 5.99,
		quantity: 10,
		cost: 59.9,
		unitId: 'LMrnBC2nBA1w313EWzYC',
		createdAt: '2020-03-16T03:17:15.657Z',
		createdById: '4OMpNYZ1M8ejKIqrDbvhYYVpf2K3',
		updatedAt: '2020-03-16T03:17:15.657Z',
		updatedById: '4OMpNYZ1M8ejKIqrDbvhYYVpf2K3',
	},
];

/* ================================================================ */
/*  Categories collection data schema                               */
/* ================================================================ */
export const CategoriesData = [
	{
		name: 'Menus',
		createdAt: '2020-03-16T03:15:15.657Z',
		createdById: '4OMpNYZ1M8ejKIqrDbvhYYVpf2K3',
		updatedAt: '2020-03-16T03:15:15.657Z',
		updatedById: '4OMpNYZ1M8ejKIqrDbvhYYVpf2K3',
	},
	{
		name: 'Drinks',
		createdAt: '2020-03-17T03:15:15.657Z',
		createdById: '4OMpNYZ1M8ejKIqrDbvhYYVpf2K3',
		updatedAt: '2020-03-17T03:15:15.657Z',
		updatedById: '4OMpNYZ1M8ejKIqrDbvhYYVpf2K3',
	},
	{
		name: 'Desserts',
		createdAt: '2020-03-18T03:15:15.657Z',
		createdById: '4OMpNYZ1M8ejKIqrDbvhYYVpf2K3',
		updatedAt: '2020-03-18T03:15:15.657Z',
		updatedById: '4OMpNYZ1M8ejKIqrDbvhYYVpf2K3',
	},
	{
		name: 'Burgers',
		createdAt: '2020-03-19T03:15:15.657Z',
		createdById: '4OMpNYZ1M8ejKIqrDbvhYYVpf2K3',
		updatedAt: '2020-03-19T03:15:15.657Z',
		updatedById: '4OMpNYZ1M8ejKIqrDbvhYYVpf2K3',
	},
	{
		name: 'Fries',
		createdAt: '2020-03-20T03:15:15.657Z',
		createdById: '4OMpNYZ1M8ejKIqrDbvhYYVpf2K3',
		updatedAt: '2020-03-20T03:15:15.657Z',
		updatedById: '4OMpNYZ1M8ejKIqrDbvhYYVpf2K3',
	},
	{
		name: 'Wraps',
		createdAt: '2020-03-21T03:15:15.657Z',
		createdById: '4OMpNYZ1M8ejKIqrDbvhYYVpf2K3',
		updatedAt: '2020-03-21T03:15:15.657Z',
		updatedById: '4OMpNYZ1M8ejKIqrDbvhYYVpf2K3',
	},
];

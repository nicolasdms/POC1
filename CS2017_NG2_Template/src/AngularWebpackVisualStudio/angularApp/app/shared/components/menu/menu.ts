import { Menu } from './menu.model';
import { orderBy } from '@progress/kendo-data-query';

let payload: Array<any>;
payload = [
	{
		DWMenuId: 2,
		DWParentMenuId: null,
		MenuGuid: '87a52f98-480f-4674-981d-f5651fdb65b9',
		MenuParentGuid: null,
		Text: 'DW',
		Text2: '',
		url: 'root.app.tables.dw',
		perm: 'menu.dw',
		icon: 'icon-layout-grid2',
		pastilleType: '',
		pastilleText: '',
		IndexOrder: 0,
		IndexRealOrder: 0,
		Enabled: true,
		LogId: 2089596,
		DW_MenuChilds: [
			{
				DWMenuId: 1,
				DWParentMenuId: 2,
				MenuGuid: '3ce3c669-85d9-46ae-b690-24f060ea1ba8',
				MenuParentGuid: '87a52f98-480f-4674-981d-f5651fdb65b9',
				Text: 'LOG_FOR',
				Text2: 'USER',
				url: 'root.app.tables.dw.userlog',
				perm: 'DW_UserLogController.Get',
				icon: 'icon-archive',
				pastilleType: '',
				pastilleText: '',
				IndexOrder: 6,
				IndexRealOrder: 7,
				Enabled: true,
				LogId: 2611845,
				DW_MenuChilds: [],
				DW_MenuParent: {
					$ref: '1'
				}
			},
			{
				DWMenuId: 10,
				DWParentMenuId: 2,
				MenuGuid: 'cba7a947-19b0-4c96-89cc-eb462c7cefd7',
				MenuParentGuid: '87a52f98-480f-4674-981d-f5651fdb65b9',
				Text: 'THIRDPARTY',
				Text2: '',
				url: 'root.app.tables.dw.tiers',
				perm: 'DW_TiersController.Get',
				icon: 'fa fa-address-card-o',
				pastilleType: '',
				pastilleText: '',
				IndexOrder: 0,
				IndexRealOrder: 1,
				Enabled: true,
				LogId: 2089604,
				DW_MenuChilds: [],
				DW_MenuParent: {
					$ref: '1'
				}
			},
			{
				DWMenuId: 11,
				DWParentMenuId: 2,
				MenuGuid: 'db2941be-8379-47a9-acba-b0f447dfc7b6',
				MenuParentGuid: '87a52f98-480f-4674-981d-f5651fdb65b9',
				Text: 'BY_THIRDPARTY',
				Text2: 'Conso',
				url: 'root.app.tables.dw.tiersconso',
				perm: 'DW_TiersPoidsConsoController.Get',
				icon: 'fa fa-ambulance',
				pastilleType: '',
				pastilleText: '',
				IndexOrder: 1,
				IndexRealOrder: 2,
				Enabled: true,
				LogId: 2739804,
				DW_MenuChilds: [],
				DW_MenuParent: {
					$ref: '1'
				}
			},
			{
				DWMenuId: 12,
				DWParentMenuId: 2,
				MenuGuid: '61e15657-3fc8-4a69-a44f-8010e4dde4a8',
				MenuParentGuid: '87a52f98-480f-4674-981d-f5651fdb65b9',
				Text: 'SOCIETY',
				Text2: '',
				url: 'root.app.tables.dw.societe',
				perm: 'DW_SocieteController.Get',
				icon: 'fa fa-briefcase',
				pastilleType: '',
				pastilleText: '',
				IndexOrder: 2,
				IndexRealOrder: 3,
				Enabled: true,
				LogId: 2611854,
				DW_MenuChilds: [],
				DW_MenuParent: {
					$ref: '1'
				}
			},
			{
				DWMenuId: 13,
				DWParentMenuId: 2,
				MenuGuid: '0f124fdb-8e37-4306-8439-cb0f39ef38a7',
				MenuParentGuid: '87a52f98-480f-4674-981d-f5651fdb65b9',
				Text: 'IBan',
				Text2: '',
				url: 'root.app.tables.dw.iban',
				perm: 'DW_IBanController.Get',
				icon: 'fa fa-paperclip',
				pastilleType: '',
				pastilleText: '',
				IndexOrder: 3,
				IndexRealOrder: 4,
				Enabled: true,
				LogId: 2611855,
				DW_MenuChilds: [],
				DW_MenuParent: {
					$ref: '1'
				}
			},
			{
				DWMenuId: 14,
				DWParentMenuId: 2,
				MenuGuid: '2f36bd04-2654-4947-8216-905e6a7b7eea',
				MenuParentGuid: '87a52f98-480f-4674-981d-f5651fdb65b9',
				Text: 'Residences',
				Text2: '',
				url: 'root.app.tables.dw.residence',
				perm: 'DW_ResidenceController.Get',
				icon: 'fa fa-building-o',
				pastilleType: '',
				pastilleText: '',
				IndexOrder: 4,
				IndexRealOrder: 5,
				Enabled: true,
				LogId: 2611856,
				DW_MenuChilds: [],
				DW_MenuParent: {
					$ref: '1'
				}
			},
			{
				DWMenuId: 15,
				DWParentMenuId: 2,
				MenuGuid: 'b3f5eabd-6ee3-474f-8cd3-b50c2a33b076',
				MenuParentGuid: '87a52f98-480f-4674-981d-f5651fdb65b9',
				Text: 'LOT',
				Text2: '',
				url: 'root.app.tables.dw.lot',
				perm: 'DW_LotController.Get',
				icon: 'fa fa-hotel',
				pastilleType: '',
				pastilleText: '',
				IndexOrder: 5,
				IndexRealOrder: 6,
				Enabled: true,
				LogId: 2611857,
				DW_MenuChilds: [],
				DW_MenuParent: {
					$ref: '1'
				}
			},
			{
				DWMenuId: 93,
				DWParentMenuId: 2,
				MenuGuid: '6c6e1e1a-5e70-4531-bf74-37e2eb02937b',
				MenuParentGuid: '87a52f98-480f-4674-981d-f5651fdb65b9',
				Text: 'Facture X3',
				Text2: '',
				url: 'root.app.tables.dw.facturex3',
				perm: 'DW_FactureX3_HeaderController.Get',
				icon: 'fa fa-file',
				pastilleType: '',
				pastilleText: '',
				IndexOrder: 7,
				IndexRealOrder: 8,
				Enabled: true,
				LogId: 2876782,
				DW_MenuChilds: [],
				DW_MenuParent: {
					$ref: '1'
				}
			}
		],
		DW_MenuParent: null
	},
	{
		DWMenuId: 3,
		DWParentMenuId: null,
		MenuGuid: '08264074-c5bc-4895-a1e3-0c519b187371',
		MenuParentGuid: null,
		Text: 'PMSCOLLECTION',
		Text2: '',
		url: 'root.app.tables.pms',
		perm: 'menu.pms',
		icon: 'icon-harddrives',
		pastilleType: '',
		pastilleText: '',
		IndexOrder: 1,
		IndexRealOrder: 9,
		Enabled: true,
		LogId: 2876707,
		DW_MenuChilds: [
			{
				DWMenuId: 16,
				DWParentMenuId: 3,
				MenuGuid: 'ba5a7f5b-b1c9-4659-8862-a5ca4f307603',
				MenuParentGuid: '08264074-c5bc-4895-a1e3-0c519b187371',
				Text: 'SAGE',
				Text2: '',
				url: 'root.app.tables.pms.sage',
				perm: 'menu.pms.sage',
				icon: '',
				pastilleType: '',
				pastilleText: '',
				IndexOrder: 0,
				IndexRealOrder: 10,
				Enabled: true,
				LogId: 2876714,
				DW_MenuChilds: [
					{
						DWMenuId: 17,
						DWParentMenuId: 16,
						MenuGuid: 'd68b349e-64b3-4778-82ec-f4e08db50541',
						MenuParentGuid: 'ba5a7f5b-b1c9-4659-8862-a5ca4f307603',
						Text: 'BY_THIRDPARTY',
						Text2: 'BANK',
						url: 'root.app.tables.pms.sage.f_banquet',
						perm: 'SAGE_F_BANQUETController.Get',
						icon: '',
						pastilleType: '',
						pastilleText: '',
						IndexOrder: 1,
						IndexRealOrder: 12,
						Enabled: true,
						LogId: 2876715,
						DW_MenuChilds: [],
						DW_MenuParent: {
							$ref: '11'
						}
					},
					{
						DWMenuId: 18,
						DWParentMenuId: 16,
						MenuGuid: 'a03d88e6-7fdb-46d5-a4b6-6de2d55ac821',
						MenuParentGuid: 'ba5a7f5b-b1c9-4659-8862-a5ca4f307603',
						Text: 'BY_THIRDPARTY',
						Text2: 'ACCOUNT',
						url: 'root.app.tables.pms.sage.f_comptet',
						perm: 'SAGE_F_COMPTETController.Get',
						icon: '',
						pastilleType: '',
						pastilleText: '',
						IndexOrder: 0,
						IndexRealOrder: 11,
						Enabled: true,
						LogId: 2876716,
						DW_MenuChilds: [],
						DW_MenuParent: {
							$ref: '11'
						}
					},
					{
						DWMenuId: 19,
						DWParentMenuId: 16,
						MenuGuid: 'a96359a1-987d-4a8d-acd8-2a13aa367ef8',
						MenuParentGuid: 'ba5a7f5b-b1c9-4659-8862-a5ca4f307603',
						Text: 'JOURNALS',
						Text2: '',
						url: 'root.app.tables.pms.sage.f_journaux',
						perm: 'SAGE_F_JOURNAUXController.Get',
						icon: '',
						pastilleType: '',
						pastilleText: '',
						IndexOrder: 5,
						IndexRealOrder: 16,
						Enabled: true,
						LogId: 2876717,
						DW_MenuChilds: [],
						DW_MenuParent: {
							$ref: '11'
						}
					},
					{
						DWMenuId: 20,
						DWParentMenuId: 16,
						MenuGuid: '34470369-767f-43d7-b87a-39fd36f998ee',
						MenuParentGuid: 'ba5a7f5b-b1c9-4659-8862-a5ca4f307603',
						Text: 'BY_THIRDPARTY',
						Text2: 'PAYMENT',
						url: 'root.app.tables.pms.sage.f_reglementt',
						perm: 'SAGE_F_REGLEMENTTController.Get',
						icon: '',
						pastilleType: '',
						pastilleText: '',
						IndexOrder: 2,
						IndexRealOrder: 13,
						Enabled: true,
						LogId: 2876718,
						DW_MenuChilds: [],
						DW_MenuParent: {
							$ref: '11'
						}
					},
					{
						DWMenuId: 21,
						DWParentMenuId: 16,
						MenuGuid: 'a7e9145f-58fa-4e92-9cfb-ff21d9e911ae',
						MenuParentGuid: 'ba5a7f5b-b1c9-4659-8862-a5ca4f307603',
						Text: 'TAX',
						Text2: '',
						url: 'root.app.tables.pms.sage.f_taxe',
						perm: 'SAGE_F_TAXEController.Get',
						icon: '',
						pastilleType: '',
						pastilleText: '',
						IndexOrder: 4,
						IndexRealOrder: 15,
						Enabled: true,
						LogId: 2876719,
						DW_MenuChilds: [],
						DW_MenuParent: {
							$ref: '11'
						}
					},
					{
						DWMenuId: 22,
						DWParentMenuId: 16,
						MenuGuid: 'c23eab07-837a-4075-8ad6-c2df649b036b',
						MenuParentGuid: 'ba5a7f5b-b1c9-4659-8862-a5ca4f307603',
						Text: 'PAYMENT',
						Text2: '',
						url: 'root.app.tables.pms.sage.p_reglement',
						perm: 'SAGE_P_REGLEMENTController.Get',
						icon: '',
						pastilleType: '',
						pastilleText: '',
						IndexOrder: 3,
						IndexRealOrder: 14,
						Enabled: true,
						LogId: 2876720,
						DW_MenuChilds: [],
						DW_MenuParent: {
							$ref: '11'
						}
					}
				],
				DW_MenuParent: {
					$ref: '10'
				}
			},
			{
				DWMenuId: 23,
				DWParentMenuId: 3,
				MenuGuid: 'a3d515f3-d3bd-4390-aaf7-2b00c13b286c',
				MenuParentGuid: '08264074-c5bc-4895-a1e3-0c519b187371',
				Text: 'PROTEL',
				Text2: '',
				url: 'root.app.tables.pms.protel',
				perm: 'menu.pms.protel',
				icon: '',
				pastilleType: '',
				pastilleText: '',
				IndexOrder: 1,
				IndexRealOrder: 17,
				Enabled: true,
				LogId: 2876721,
				DW_MenuChilds: [
					{
						DWMenuId: 24,
						DWParentMenuId: 23,
						MenuGuid: 'ca237066-4d57-4c8d-884c-b3e863af46c0',
						MenuParentGuid: 'a3d515f3-d3bd-4390-aaf7-2b00c13b286c',
						Text: 'bstatdetail',
						Text2: '',
						url: 'root.app.tables.pms.protel.bstatdetail',
						perm: 'PROTEL_bstatdetailController.Get',
						icon: '',
						pastilleType: '',
						pastilleText: '',
						IndexOrder: 6,
						IndexRealOrder: 24,
						Enabled: true,
						LogId: 2876722,
						DW_MenuChilds: [],
						DW_MenuParent: {
							$ref: '18'
						}
					},
					{
						DWMenuId: 25,
						DWParentMenuId: 23,
						MenuGuid: 'd87b7165-8846-45b3-80ac-2cea9737fe20',
						MenuParentGuid: 'a3d515f3-d3bd-4390-aaf7-2b00c13b286c',
						Text: 'calend',
						Text2: '',
						url: 'root.app.tables.pms.protel.calend',
						perm: 'PROTEL_calendController.Get',
						icon: '',
						pastilleType: '',
						pastilleText: '',
						IndexOrder: 7,
						IndexRealOrder: 25,
						Enabled: true,
						LogId: 2876723,
						DW_MenuChilds: [],
						DW_MenuParent: {
							$ref: '18'
						}
					},
					{
						DWMenuId: 26,
						DWParentMenuId: 23,
						MenuGuid: '53eb2553-79bd-4923-957d-2c51018e2ca1',
						MenuParentGuid: 'a3d515f3-d3bd-4390-aaf7-2b00c13b286c',
						Text: 'caresa',
						Text2: '',
						url: 'root.app.tables.pms.protel.caresa',
						perm: 'PROTEL_CAResaController.Get',
						icon: '',
						pastilleType: '',
						pastilleText: '',
						IndexOrder: 5,
						IndexRealOrder: 23,
						Enabled: true,
						LogId: 2876724,
						DW_MenuChilds: [],
						DW_MenuParent: {
							$ref: '18'
						}
					},
					{
						DWMenuId: 27,
						DWParentMenuId: 23,
						MenuGuid: '3eb17190-4b75-492d-846f-e2626271c8f7',
						MenuParentGuid: 'a3d515f3-d3bd-4390-aaf7-2b00c13b286c',
						Text: 'client_merge',
						Text2: '',
						url: 'root.app.tables.pms.protel.client_merge',
						perm: 'PROTEL_client_mergeController.Get',
						icon: '',
						pastilleType: '',
						pastilleText: '',
						IndexOrder: 2,
						IndexRealOrder: 20,
						Enabled: true,
						LogId: 2876725,
						DW_MenuChilds: [],
						DW_MenuParent: {
							$ref: '18'
						}
					},
					{
						DWMenuId: 28,
						DWParentMenuId: 23,
						MenuGuid: 'cfc08ed0-56b4-4826-b9cc-8fa0df389363',
						MenuParentGuid: 'a3d515f3-d3bd-4390-aaf7-2b00c13b286c',
						Text: 'client_title',
						Text2: '',
						url: 'root.app.tables.pms.protel.client_title',
						perm: 'PROTEL_CLIENT_TITLEController.Get',
						icon: '',
						pastilleType: '',
						pastilleText: '',
						IndexOrder: 1,
						IndexRealOrder: 19,
						Enabled: true,
						LogId: 2876726,
						DW_MenuChilds: [],
						DW_MenuParent: {
							$ref: '18'
						}
					},
					{
						DWMenuId: 29,
						DWParentMenuId: 23,
						MenuGuid: 'fe5ad52e-5f8f-4a88-8c6c-e87631d41158',
						MenuParentGuid: 'a3d515f3-d3bd-4390-aaf7-2b00c13b286c',
						Text: 'clients',
						Text2: '',
						url: 'root.app.tables.pms.protel.clients',
						perm: 'PROTEL_clientsController.Get',
						icon: '',
						pastilleType: '',
						pastilleText: '',
						IndexOrder: 0,
						IndexRealOrder: 18,
						Enabled: true,
						LogId: 2876727,
						DW_MenuChilds: [],
						DW_MenuParent: {
							$ref: '18'
						}
					},
					{
						DWMenuId: 30,
						DWParentMenuId: 23,
						MenuGuid: 'f7059888-b552-4552-a8cd-8ff203710f28',
						MenuParentGuid: 'a3d515f3-d3bd-4390-aaf7-2b00c13b286c',
						Text: 'event',
						Text2: '',
						url: 'root.app.tables.pms.protel.event',
						perm: 'PROTEL_eventController.Get',
						icon: '',
						pastilleType: '',
						pastilleText: '',
						IndexOrder: 8,
						IndexRealOrder: 26,
						Enabled: true,
						LogId: 2876728,
						DW_MenuChilds: [],
						DW_MenuParent: {
							$ref: '18'
						}
					},
					{
						DWMenuId: 31,
						DWParentMenuId: 23,
						MenuGuid: 'ba2fdf38-80f9-4990-87c6-34e105da149a',
						MenuParentGuid: 'a3d515f3-d3bd-4390-aaf7-2b00c13b286c',
						Text: 'fstathotel',
						Text2: '',
						url: 'root.app.tables.pms.protel.fstathotel',
						perm: 'PROTEL_fstathotelController.Get',
						icon: '',
						pastilleType: '',
						pastilleText: '',
						IndexOrder: 9,
						IndexRealOrder: 27,
						Enabled: true,
						LogId: 2876729,
						DW_MenuChilds: [],
						DW_MenuParent: {
							$ref: '18'
						}
					},
					{
						DWMenuId: 32,
						DWParentMenuId: 23,
						MenuGuid: '6a03bb35-c683-4a6f-9916-f3fdcf685eac',
						MenuParentGuid: 'a3d515f3-d3bd-4390-aaf7-2b00c13b286c',
						Text: 'param',
						Text2: '',
						url: 'root.app.tables.pms.protel.param',
						perm: 'PROTEL_paramController.Get',
						icon: '',
						pastilleType: '',
						pastilleText: '',
						IndexOrder: 10,
						IndexRealOrder: 28,
						Enabled: true,
						LogId: 2876730,
						DW_MenuChilds: [],
						DW_MenuParent: {
							$ref: '18'
						}
					},
					{
						DWMenuId: 33,
						DWParentMenuId: 23,
						MenuGuid: 'e008da6e-bf3f-48f3-bca1-b565c7292d49',
						MenuParentGuid: 'a3d515f3-d3bd-4390-aaf7-2b00c13b286c',
						Text: 'pclients',
						Text2: '',
						url: 'root.app.tables.pms.protel.pclients',
						perm: 'PROTEL_pclientsController.Get',
						icon: '',
						pastilleType: '',
						pastilleText: '',
						IndexOrder: 3,
						IndexRealOrder: 21,
						Enabled: true,
						LogId: 2876731,
						DW_MenuChilds: [],
						DW_MenuParent: {
							$ref: '18'
						}
					},
					{
						DWMenuId: 34,
						DWParentMenuId: 23,
						MenuGuid: 'c4bbaafd-e5c9-47e0-8f6c-c7118f72d8cf',
						MenuParentGuid: 'a3d515f3-d3bd-4390-aaf7-2b00c13b286c',
						Text: 'prod',
						Text2: '',
						url: 'root.app.tables.pms.protel.prod',
						perm: 'PROTEL_prodController.Get',
						icon: '',
						pastilleType: '',
						pastilleText: '',
						IndexOrder: 4,
						IndexRealOrder: 22,
						Enabled: true,
						LogId: 2876732,
						DW_MenuChilds: [],
						DW_MenuParent: {
							$ref: '18'
						}
					},
					{
						DWMenuId: 35,
						DWParentMenuId: 23,
						MenuGuid: 'fe0da8ec-8968-4329-b230-f6db1f273298',
						MenuParentGuid: 'a3d515f3-d3bd-4390-aaf7-2b00c13b286c',
						Text: 'resbanquet',
						Text2: '',
						url: 'root.app.tables.pms.protel.resbanquet',
						perm: 'PROTEL_ResBanquetController.Get',
						icon: '',
						pastilleType: '',
						pastilleText: '',
						IndexOrder: 11,
						IndexRealOrder: 29,
						Enabled: true,
						LogId: 2876733,
						DW_MenuChilds: [],
						DW_MenuParent: {
							$ref: '18'
						}
					},
					{
						DWMenuId: 36,
						DWParentMenuId: 23,
						MenuGuid: '9e56a712-6e2b-4f77-8247-bdf4ce7f4009',
						MenuParentGuid: 'a3d515f3-d3bd-4390-aaf7-2b00c13b286c',
						Text: 'resindiv',
						Text2: '',
						url: 'root.app.tables.pms.protel.resindiv',
						perm: 'PROTEL_resIndivController.Get',
						icon: '',
						pastilleType: '',
						pastilleText: '',
						IndexOrder: 12,
						IndexRealOrder: 30,
						Enabled: true,
						LogId: 2876734,
						DW_MenuChilds: [],
						DW_MenuParent: {
							$ref: '18'
						}
					},
					{
						DWMenuId: 37,
						DWParentMenuId: 23,
						MenuGuid: '1d3c36fc-9b6f-4948-b5db-1379b9a37efd',
						MenuParentGuid: 'a3d515f3-d3bd-4390-aaf7-2b00c13b286c',
						Text: 'statdetail',
						Text2: '',
						url: 'root.app.tables.pms.protel.statdetail',
						perm: 'PROTEL_statdetailController.Get',
						icon: '',
						pastilleType: '',
						pastilleText: '',
						IndexOrder: 13,
						IndexRealOrder: 31,
						Enabled: true,
						LogId: 2876735,
						DW_MenuChilds: [],
						DW_MenuParent: {
							$ref: '18'
						}
					},
					{
						DWMenuId: 38,
						DWParentMenuId: 23,
						MenuGuid: '14127646-c18c-43c1-822c-4bda9262c20d',
						MenuParentGuid: 'a3d515f3-d3bd-4390-aaf7-2b00c13b286c',
						Text: 'stathotel',
						Text2: '',
						url: 'root.app.tables.pms.protel.stathotel',
						perm: 'PROTEL_stathotelController.Get',
						icon: '',
						pastilleType: '',
						pastilleText: '',
						IndexOrder: 14,
						IndexRealOrder: 32,
						Enabled: true,
						LogId: 2876736,
						DW_MenuChilds: [],
						DW_MenuParent: {
							$ref: '18'
						}
					}
				],
				DW_MenuParent: {
					$ref: '10'
				}
			},
			{
				DWMenuId: 39,
				DWParentMenuId: 3,
				MenuGuid: 'b21e6073-7210-49b6-a316-495ecc3744c2',
				MenuParentGuid: '08264074-c5bc-4895-a1e3-0c519b187371',
				Text: 'HEXALOG',
				Text2: '',
				url: 'root.app.tables.pms.hexalog',
				perm: 'menu.pms.hexalog',
				icon: '',
				pastilleType: '',
				pastilleText: '',
				IndexOrder: 2,
				IndexRealOrder: 33,
				Enabled: true,
				LogId: 2876737,
				DW_MenuChilds: [
					{
						DWMenuId: 41,
						DWParentMenuId: 39,
						MenuGuid: 'd4404301-7f56-487d-a334-0d6048211ba0',
						MenuParentGuid: 'b21e6073-7210-49b6-a316-495ecc3744c2',
						Text: 'codestat',
						Text2: '',
						url: 'root.app.tables.pms.hexalog.codestat',
						perm: 'HEXALOG_CODESTATController.Get',
						icon: '',
						pastilleType: '',
						pastilleText: '',
						IndexOrder: 7,
						IndexRealOrder: 41,
						Enabled: false,
						LogId: 2876739,
						DW_MenuChilds: [],
						DW_MenuParent: {
							$ref: '34'
						}
					},
					{
						DWMenuId: 42,
						DWParentMenuId: 39,
						MenuGuid: 'e70fa868-d484-4c61-8bf0-7e720a0c4ea6',
						MenuParentGuid: 'b21e6073-7210-49b6-a316-495ecc3744c2',
						Text: 'HEXALOG Communication',
						Text2: '',
						url: 'root.app.tables.pms.hexalog.communication',
						perm: 'HEXALOG_CommunicationController.Get',
						icon: '',
						pastilleType: '',
						pastilleText: '',
						IndexOrder: 6,
						IndexRealOrder: 40,
						Enabled: false,
						LogId: 2876740,
						DW_MenuChilds: [],
						DW_MenuParent: {
							$ref: '34'
						}
					},
					{
						DWMenuId: 43,
						DWParentMenuId: 39,
						MenuGuid: 'd03ef80a-ef0b-49a3-a66e-0da7a4d1bdeb',
						MenuParentGuid: 'b21e6073-7210-49b6-a316-495ecc3744c2',
						Text: 'BY_THIRDPARTY',
						Text2: 'ACCOUNT',
						url: 'root.app.tables.pms.hexalog.comptetiers',
						perm: 'HEXALOG_CompteTiersController.Get',
						icon: '',
						pastilleType: '',
						pastilleText: '',
						IndexOrder: 1,
						IndexRealOrder: 35,
						Enabled: true,
						LogId: 2876741,
						DW_MenuChilds: [],
						DW_MenuParent: {
							$ref: '34'
						}
					},
					{
						DWMenuId: 44,
						DWParentMenuId: 39,
						MenuGuid: 'ef0f0b4e-a8b9-4ba2-bad4-34132c9c80ff',
						MenuParentGuid: 'b21e6073-7210-49b6-a316-495ecc3744c2',
						Text: 'CONTRACTS',
						Text2: '',
						url: 'root.app.tables.pms.hexalog.contrat',
						perm: 'HEXALOG_ContratController.Get',
						icon: '',
						pastilleType: '',
						pastilleText: '',
						IndexOrder: 2,
						IndexRealOrder: 36,
						Enabled: true,
						LogId: 2876742,
						DW_MenuChilds: [],
						DW_MenuParent: {
							$ref: '34'
						}
					},
					{
						DWMenuId: 45,
						DWParentMenuId: 39,
						MenuGuid: '039d06dd-782c-4aef-b415-0c6b08fbca76',
						MenuParentGuid: 'b21e6073-7210-49b6-a316-495ecc3744c2',
						Text: 'LOT',
						Text2: '',
						url: 'root.app.tables.pms.hexalog.lot',
						perm: 'HEXALOG_LotController.Get',
						icon: '',
						pastilleType: '',
						pastilleText: '',
						IndexOrder: 5,
						IndexRealOrder: 39,
						Enabled: true,
						LogId: 2876743,
						DW_MenuChilds: [],
						DW_MenuParent: {
							$ref: '34'
						}
					},
					{
						DWMenuId: 46,
						DWParentMenuId: 39,
						MenuGuid: 'bf84fbb4-93be-4a40-a27e-29ca7a8a50c3',
						MenuParentGuid: 'b21e6073-7210-49b6-a316-495ecc3744c2',
						Text: 'Residences',
						Text2: '',
						url: 'root.app.tables.pms.hexalog.residence',
						perm: 'HEXALOG_ResidenceController.Get',
						icon: '',
						pastilleType: '',
						pastilleText: '',
						IndexOrder: 4,
						IndexRealOrder: 38,
						Enabled: true,
						LogId: 2876744,
						DW_MenuChilds: [],
						DW_MenuParent: {
							$ref: '34'
						}
					},
					{
						DWMenuId: 47,
						DWParentMenuId: 39,
						MenuGuid: '78d0b8b8-b35e-4917-81e6-8767c5ab3f8c',
						MenuParentGuid: 'b21e6073-7210-49b6-a316-495ecc3744c2',
						Text: 'iBan',
						Text2: '',
						url: 'root.app.tables.pms.hexalog.rib',
						perm: 'HEXALOG_RibController.Get',
						icon: '',
						pastilleType: '',
						pastilleText: '',
						IndexOrder: 3,
						IndexRealOrder: 37,
						Enabled: true,
						LogId: 2876745,
						DW_MenuChilds: [],
						DW_MenuParent: {
							$ref: '34'
						}
					},
					{
						DWMenuId: 48,
						DWParentMenuId: 39,
						MenuGuid: 'e7034b1b-8228-4b6a-92d8-2e947a81407f',
						MenuParentGuid: 'b21e6073-7210-49b6-a316-495ecc3744c2',
						Text: 'THIRDPARTY',
						Text2: '',
						url: 'root.app.tables.pms.hexalog.tiers',
						perm: 'HEXALOG_TiersController.Get',
						icon: '',
						pastilleType: '',
						pastilleText: '',
						IndexOrder: 0,
						IndexRealOrder: 34,
						Enabled: true,
						LogId: 2876746,
						DW_MenuChilds: [],
						DW_MenuParent: {
							$ref: '34'
						}
					}
				],
				DW_MenuParent: {
					$ref: '10'
				}
			},
			{
				DWMenuId: 40,
				DWParentMenuId: 3,
				MenuGuid: '2999a5f1-dd0c-4013-ab23-db3f14c08b7a',
				MenuParentGuid: '08264074-c5bc-4895-a1e3-0c519b187371',
				Text: 'CEGID',
				Text2: '',
				url: 'root.app.tables.pms.cegid',
				perm: 'menu.pms.cegid',
				icon: '',
				pastilleType: '',
				pastilleText: '',
				IndexOrder: 3,
				IndexRealOrder: 42,
				Enabled: true,
				LogId: 2876738,
				DW_MenuChilds: [
					{
						DWMenuId: 50,
						DWParentMenuId: 40,
						MenuGuid: 'b838dad5-057d-4850-8249-6b4acf9b7f24',
						MenuParentGuid: '2999a5f1-dd0c-4013-ab23-db3f14c08b7a',
						Text: 'contact',
						Text2: '',
						url: 'root.app.tables.pms.cegid.contact',
						perm: 'CEGID_CONTACTController.Get',
						icon: '',
						pastilleType: '',
						pastilleText: '',
						IndexOrder: 2,
						IndexRealOrder: 45,
						Enabled: true,
						LogId: 2876747,
						DW_MenuChilds: [],
						DW_MenuParent: {
							$ref: '43'
						}
					},
					{
						DWMenuId: 51,
						DWParentMenuId: 40,
						MenuGuid: '4bb257b8-0dc1-45d2-865c-edf804008058',
						MenuParentGuid: '2999a5f1-dd0c-4013-ab23-db3f14c08b7a',
						Text: 'RIB',
						Text2: '',
						url: 'root.app.tables.pms.cegid.rib',
						perm: 'CEGID_RIBController.Get',
						icon: '',
						pastilleType: '',
						pastilleText: '',
						IndexOrder: 1,
						IndexRealOrder: 44,
						Enabled: true,
						LogId: 2876748,
						DW_MenuChilds: [],
						DW_MenuParent: {
							$ref: '43'
						}
					},
					{
						DWMenuId: 52,
						DWParentMenuId: 40,
						MenuGuid: 'c5071134-38d6-4fae-86b3-abd01e709add',
						MenuParentGuid: '2999a5f1-dd0c-4013-ab23-db3f14c08b7a',
						Text: 'THIRDPARTY',
						Text2: '',
						url: 'root.app.tables.pms.cegid.tiers',
						perm: 'CEGID_TIERSController.Get',
						icon: '',
						pastilleType: '',
						pastilleText: '',
						IndexOrder: 0,
						IndexRealOrder: 43,
						Enabled: true,
						LogId: 2876749,
						DW_MenuChilds: [],
						DW_MenuParent: {
							$ref: '43'
						}
					}
				],
				DW_MenuParent: {
					$ref: '10'
				}
			},
			{
				DWMenuId: 83,
				DWParentMenuId: 3,
				MenuGuid: 'eba66e8a-7c89-4572-a24b-225ec397f78b',
				MenuParentGuid: '08264074-c5bc-4895-a1e3-0c519b187371',
				Text: 'X3',
				Text2: '',
				url: 'root.app.tables.pms.x3',
				perm: 'menu.pms.x3',
				icon: '',
				pastilleType: '',
				pastilleText: '',
				IndexOrder: 4,
				IndexRealOrder: 46,
				Enabled: true,
				LogId: 2876777,
				DW_MenuChilds: [
					{
						DWMenuId: 84,
						DWParentMenuId: 83,
						MenuGuid: '74fe8ceb-2a11-4445-899d-00208f115a13',
						MenuParentGuid: 'eba66e8a-7c89-4572-a24b-225ec397f78b',
						Text: 'BPAddress',
						Text2: '',
						url: 'root.app.tables.pms.x3.bpaddress',
						perm: 'X3_BPADDRESSController.Get',
						icon: '',
						pastilleType: '',
						pastilleText: '',
						IndexOrder: 3,
						IndexRealOrder: 50,
						Enabled: true,
						LogId: 2876778,
						DW_MenuChilds: [],
						DW_MenuParent: {
							$ref: '47'
						}
					},
					{
						DWMenuId: 85,
						DWParentMenuId: 83,
						MenuGuid: '0e27e8c3-f230-4fd6-89ed-4d976f06fdbb',
						MenuParentGuid: 'eba66e8a-7c89-4572-a24b-225ec397f78b',
						Text: 'BPSupplier',
						Text2: '',
						url: 'root.app.tables.pms.x3.bpsupplier',
						perm: 'X3_BPSUPPLIERController.Get',
						icon: '',
						pastilleType: '',
						pastilleText: '',
						IndexOrder: 1,
						IndexRealOrder: 48,
						Enabled: true,
						LogId: 2876779,
						DW_MenuChilds: [],
						DW_MenuParent: {
							$ref: '47'
						}
					},
					{
						DWMenuId: 86,
						DWParentMenuId: 83,
						MenuGuid: '242a17eb-97e2-41ae-aa09-ff7cad499211',
						MenuParentGuid: 'eba66e8a-7c89-4572-a24b-225ec397f78b',
						Text: 'BPCustomer',
						Text2: '',
						url: 'root.app.tables.pms.x3.bpcustomer',
						perm: 'X3_BPCUSTOMERController.Get',
						icon: '',
						pastilleType: '',
						pastilleText: '',
						IndexOrder: 2,
						IndexRealOrder: 49,
						Enabled: true,
						LogId: 2876780,
						DW_MenuChilds: [],
						DW_MenuParent: {
							$ref: '47'
						}
					},
					{
						DWMenuId: 87,
						DWParentMenuId: 83,
						MenuGuid: 'eb6451ec-74e8-40fd-a278-3642b654eeb6',
						MenuParentGuid: 'eba66e8a-7c89-4572-a24b-225ec397f78b',
						Text: 'BPartner',
						Text2: '',
						url: 'root.app.tables.pms.x3.bpartner',
						perm: 'X3_BPARTNERController.Get',
						icon: '',
						pastilleType: '',
						pastilleText: '',
						IndexOrder: 0,
						IndexRealOrder: 47,
						Enabled: true,
						LogId: 2876781,
						DW_MenuChilds: [],
						DW_MenuParent: {
							$ref: '47'
						}
					}
				],
				DW_MenuParent: {
					$ref: '10'
				}
			}
		],
		DW_MenuParent: null
	},
	{
		DWMenuId: 4,
		DWParentMenuId: null,
		MenuGuid: '7c53a40f-458f-4d76-95ff-cccc3fb657c9',
		MenuParentGuid: null,
		Text: 'EXPORT',
		Text2: '',
		url: 'root.app.tables.exports',
		perm: 'menu.exports',
		icon: 'icon-export',
		pastilleType: '',
		pastilleText: '',
		IndexOrder: 2,
		IndexRealOrder: 51,
		Enabled: true,
		LogId: 2876708,
		DW_MenuChilds: [
			{
				DWMenuId: 75,
				DWParentMenuId: 4,
				MenuGuid: '4950fe81-6987-4be4-ac90-4490e8c15542',
				MenuParentGuid: '7c53a40f-458f-4d76-95ff-cccc3fb657c9',
				Text: 'SAGE',
				Text2: '',
				url: 'root.app.tables.exports.sage',
				perm: 'menu.exports.grimmo',
				icon: '',
				pastilleType: 'danger',
				pastilleText: 'TODO',
				IndexOrder: 2,
				IndexRealOrder: 56,
				Enabled: true,
				LogId: 2876772,
				DW_MenuChilds: [],
				DW_MenuParent: {
					$ref: '52'
				}
			},
			{
				DWMenuId: 78,
				DWParentMenuId: 4,
				MenuGuid: '1bfdfb51-5d3a-423a-9cce-3c8dc0391deb',
				MenuParentGuid: '7c53a40f-458f-4d76-95ff-cccc3fb657c9',
				Text: "GR'IMMO",
				Text2: '',
				url: 'root.app.tables.exports.grimmo',
				perm: 'menu.exports',
				icon: '',
				pastilleType: '',
				pastilleText: '',
				IndexOrder: 0,
				IndexRealOrder: 52,
				Enabled: true,
				LogId: 2876773,
				DW_MenuChilds: [
					{
						DWMenuId: 80,
						DWParentMenuId: 78,
						MenuGuid: '55a8f342-9116-4cfd-bc00-fc6aa54eb15b',
						MenuParentGuid: '1bfdfb51-5d3a-423a-9cce-3c8dc0391deb',
						Text: 'THIRDPARTY',
						Text2: '',
						url: 'root.app.tables.exports.grimmo.tiers',
						perm: 'menu.exports',
						icon: '',
						pastilleType: 'primary',
						pastilleText: 'Temps r�el',
						IndexOrder: 0,
						IndexRealOrder: 53,
						Enabled: true,
						LogId: 2876775,
						DW_MenuChilds: [],
						DW_MenuParent: {
							$ref: '54'
						}
					},
					{
						DWMenuId: 81,
						DWParentMenuId: 78,
						MenuGuid: '8e092d2b-c5ed-4c47-b6f5-228cbac3d777',
						MenuParentGuid: '1bfdfb51-5d3a-423a-9cce-3c8dc0391deb',
						Text: 'iBan',
						Text2: '',
						url: 'root.app.tables.exports.grimmo.iban',
						perm: 'menu.exports',
						icon: '',
						pastilleType: 'primary',
						pastilleText: 'Temps r�el',
						IndexOrder: 1,
						IndexRealOrder: 54,
						Enabled: true,
						LogId: 2876776,
						DW_MenuChilds: [],
						DW_MenuParent: {
							$ref: '54'
						}
					}
				],
				DW_MenuParent: {
					$ref: '52'
				}
			},
			{
				DWMenuId: 79,
				DWParentMenuId: 4,
				MenuGuid: '1c08f237-7132-467a-a6e0-5039e4d9238f',
				MenuParentGuid: '7c53a40f-458f-4d76-95ff-cccc3fb657c9',
				Text: 'HEXALOG',
				Text2: '',
				url: 'root.app.tables.exports.hexalog',
				perm: 'menu.exports.grimmo',
				icon: '',
				pastilleType: 'danger',
				pastilleText: 'TODO',
				IndexOrder: 1,
				IndexRealOrder: 55,
				Enabled: true,
				LogId: 2876774,
				DW_MenuChilds: [],
				DW_MenuParent: {
					$ref: '52'
				}
			}
		],
		DW_MenuParent: null
	},
	{
		DWMenuId: 5,
		DWParentMenuId: null,
		MenuGuid: 'cede107d-1e7e-422e-bb74-b97cdb3bc7c7',
		MenuParentGuid: null,
		Text: 'ME.PROFILE',
		Text2: '',
		url: 'root.app.user',
		perm: 'authenticatedUser',
		icon: 'icon-user',
		pastilleType: '',
		pastilleText: '',
		IndexOrder: 3,
		IndexRealOrder: 57,
		Enabled: true,
		LogId: 2876709,
		DW_MenuChilds: [
			{
				DWMenuId: 53,
				DWParentMenuId: 5,
				MenuGuid: 'acaa7f0c-3dd7-4bfa-bd1c-f1d8a3260656',
				MenuParentGuid: 'cede107d-1e7e-422e-bb74-b97cdb3bc7c7',
				Text: 'ME.MYPROFILE',
				Text2: '',
				url: 'root.app.user.profile',
				perm: 'authenticatedUser',
				icon: 'fa fa-user',
				pastilleType: '',
				pastilleText: '',
				IndexOrder: 0,
				IndexRealOrder: 58,
				Enabled: true,
				LogId: 2876750,
				DW_MenuChilds: [],
				DW_MenuParent: {
					$ref: '58'
				}
			},
			{
				DWMenuId: 54,
				DWParentMenuId: 5,
				MenuGuid: '71cfd1fd-9123-4025-bc4c-8c2eb892d6b8',
				MenuParentGuid: 'cede107d-1e7e-422e-bb74-b97cdb3bc7c7',
				Text: 'SEARCH',
				Text2: '',
				url: 'root.app.user.search',
				perm: 'DW_UserController.Get',
				icon: 'fa fa-search',
				pastilleType: 'success',
				pastilleText: 'NEW',
				IndexOrder: 1,
				IndexRealOrder: 59,
				Enabled: true,
				LogId: 2876751,
				DW_MenuChilds: [],
				DW_MenuParent: {
					$ref: '58'
				}
			},
			{
				DWMenuId: 55,
				DWParentMenuId: 5,
				MenuGuid: '80220c72-9234-44d6-87d3-054a3cc56104',
				MenuParentGuid: 'cede107d-1e7e-422e-bb74-b97cdb3bc7c7',
				Text: 'ME.CALENDAR',
				Text2: '',
				url: 'root.app.user.calendar',
				perm: 'authenticatedUser',
				icon: 'fa fa-calendar',
				pastilleType: 'warning',
				pastilleText: 'Exemple',
				IndexOrder: 2,
				IndexRealOrder: 60,
				Enabled: true,
				LogId: 2876752,
				DW_MenuChilds: [],
				DW_MenuParent: {
					$ref: '58'
				}
			},
			{
				DWMenuId: 56,
				DWParentMenuId: 5,
				MenuGuid: 'bcde795e-c7fb-465d-bb78-316aedf520eb',
				MenuParentGuid: 'cede107d-1e7e-422e-bb74-b97cdb3bc7c7',
				Text: 'ME.MESSAGES',
				Text2: '',
				url: 'root.app.user.messages',
				perm: 'authenticatedUser',
				icon: 'fa fa-inbox',
				pastilleType: 'warning',
				pastilleText: 'Exemple',
				IndexOrder: 3,
				IndexRealOrder: 61,
				Enabled: true,
				LogId: 2876753,
				DW_MenuChilds: [],
				DW_MenuParent: {
					$ref: '58'
				}
			}
		],
		DW_MenuParent: null
	},
	{
		DWMenuId: 6,
		DWParentMenuId: null,
		MenuGuid: 'f09972be-9e75-49e1-901e-5b1ffe3aa0cd',
		MenuParentGuid: null,
		Text: 'UTILITIES.MAIN',
		Text2: '',
		url: 'root.app.tools',
		perm: 'DW_AdminController.AdminDashboard',
		icon: 'icon-package',
		pastilleType: '',
		pastilleText: '',
		IndexOrder: 4,
		IndexRealOrder: 62,
		Enabled: true,
		LogId: 2876710,
		DW_MenuChilds: [
			{
				DWMenuId: 57,
				DWParentMenuId: 6,
				MenuGuid: 'eab4089f-e829-480a-9a79-06d342b040f4',
				MenuParentGuid: 'f09972be-9e75-49e1-901e-5b1ffe3aa0cd',
				Text: 'UTILITIES.TASKRUNNER',
				Text2: '',
				url: 'root.app.tools.hangfire',
				perm: 'DW_AdminController.AdminDashboard',
				icon: '',
				pastilleType: '',
				pastilleText: '',
				IndexOrder: 0,
				IndexRealOrder: 63,
				Enabled: true,
				LogId: 2876754,
				DW_MenuChilds: [],
				DW_MenuParent: {
					$ref: '63'
				}
			},
			{
				DWMenuId: 58,
				DWParentMenuId: 6,
				MenuGuid: 'd1c444e5-05f6-445e-a1b8-87fd59c21634',
				MenuParentGuid: 'f09972be-9e75-49e1-901e-5b1ffe3aa0cd',
				Text: 'UTILITIES.ERRORLOG',
				Text2: '',
				url: 'root.app.tools.elmah',
				perm: 'DW_AdminController.AdminDashboard',
				icon: '',
				pastilleType: '',
				pastilleText: '',
				IndexOrder: 1,
				IndexRealOrder: 64,
				Enabled: true,
				LogId: 2876755,
				DW_MenuChilds: [],
				DW_MenuParent: {
					$ref: '63'
				}
			},
			{
				DWMenuId: 59,
				DWParentMenuId: 6,
				MenuGuid: '4c38f394-460d-45f0-ba16-0ab6d0be4b6a',
				MenuParentGuid: 'f09972be-9e75-49e1-901e-5b1ffe3aa0cd',
				Text: 'UTILITIES.ICONS_TYPE',
				Text2: 'Font Awesome',
				url: 'ui/icons',
				perm: 'DW_AdminController.AdminDashboard',
				icon: '',
				pastilleType: '',
				pastilleText: '',
				IndexOrder: 2,
				IndexRealOrder: 65,
				Enabled: true,
				LogId: 2876756,
				DW_MenuChilds: [],
				DW_MenuParent: {
					$ref: '63'
				}
			},
			{
				DWMenuId: 60,
				DWParentMenuId: 6,
				MenuGuid: 'c1381e1f-54ca-4a14-94a9-538040f5b4dc',
				MenuParentGuid: 'f09972be-9e75-49e1-901e-5b1ffe3aa0cd',
				Text: 'UTILITIES.ICONS_TYPE',
				Text2: 'Themify',
				url: 'root.app.tools.icons.themify',
				perm: 'DW_AdminController.AdminDashboard',
				icon: '',
				pastilleType: '',
				pastilleText: '',
				IndexOrder: 3,
				IndexRealOrder: 66,
				Enabled: true,
				LogId: 2876757,
				DW_MenuChilds: [],
				DW_MenuParent: {
					$ref: '63'
				}
			},
			{
				DWMenuId: 61,
				DWParentMenuId: 6,
				MenuGuid: 'e0ead502-cc3e-45ff-8cda-50f1e180ffe0',
				MenuParentGuid: 'f09972be-9e75-49e1-901e-5b1ffe3aa0cd',
				Text: 'UTILITIES.ERROR404',
				Text2: '',
				url: 'root.error.404',
				perm: 'DW_AdminController.AdminDashboard',
				icon: '',
				pastilleType: '',
				pastilleText: '',
				IndexOrder: 5,
				IndexRealOrder: 68,
				Enabled: true,
				LogId: 2876758,
				DW_MenuChilds: [],
				DW_MenuParent: {
					$ref: '63'
				}
			},
			{
				DWMenuId: 62,
				DWParentMenuId: 6,
				MenuGuid: '0f6bf7d1-4813-4116-9e5e-d7ef220361c4',
				MenuParentGuid: 'f09972be-9e75-49e1-901e-5b1ffe3aa0cd',
				Text: 'UTILITIES.ERROR500',
				Text2: '',
				url: 'root.error.500',
				perm: 'DW_AdminController.AdminDashboard',
				icon: '',
				pastilleType: '',
				pastilleText: '',
				IndexOrder: 6,
				IndexRealOrder: 69,
				Enabled: true,
				LogId: 2876759,
				DW_MenuChilds: [],
				DW_MenuParent: {
					$ref: '63'
				}
			},
			{
				DWMenuId: 63,
				DWParentMenuId: 6,
				MenuGuid: 'd8ac8e89-3869-4c4a-8bf6-79936e0603d7',
				MenuParentGuid: 'f09972be-9e75-49e1-901e-5b1ffe3aa0cd',
				Text: 'TASK.KARMA',
				Text2: '',
				url: 'root.app.tools.karma',
				perm: 'DW_AdminController.AdminDashboard',
				icon: '',
				pastilleType: '',
				pastilleText: '',
				IndexOrder: 7,
				IndexRealOrder: 70,
				Enabled: true,
				LogId: 2876760,
				DW_MenuChilds: [],
				DW_MenuParent: {
					$ref: '63'
				}
			},
			{
				DWMenuId: 64,
				DWParentMenuId: 6,
				MenuGuid: '106bbe36-713b-4e7a-bd83-b84b2b474c40',
				MenuParentGuid: 'f09972be-9e75-49e1-901e-5b1ffe3aa0cd',
				Text: 'TASK.PROTRACTOR',
				Text2: '',
				url: 'root.app.tools.protractor',
				perm: 'DW_AdminController.AdminDashboard',
				icon: '',
				pastilleType: '',
				pastilleText: '',
				IndexOrder: 8,
				IndexRealOrder: 71,
				Enabled: true,
				LogId: 2876761,
				DW_MenuChilds: [],
				DW_MenuParent: {
					$ref: '63'
				}
			},
			{
				DWMenuId: 74,
				DWParentMenuId: 6,
				MenuGuid: 'd8009093-c67c-40ed-80cc-4a57cf6fca8d',
				MenuParentGuid: 'f09972be-9e75-49e1-901e-5b1ffe3aa0cd',
				Text: 'UTILITIES.ICONS_TYPE',
				Text2: 'Bootstrap',
				url: 'root.app.tools.icons.bootstrap',
				perm: 'DW_AdminController.AdminDashboard',
				icon: '',
				pastilleType: '',
				pastilleText: '',
				IndexOrder: 4,
				IndexRealOrder: 67,
				Enabled: true,
				LogId: 2876771,
				DW_MenuChilds: [],
				DW_MenuParent: {
					$ref: '63'
				}
			}
		],
		DW_MenuParent: null
	},
	{
		DWMenuId: 7,
		DWParentMenuId: null,
		MenuGuid: 'b6f469fd-9779-4d89-aff0-1f0032ed106e',
		MenuParentGuid: null,
		Text: 'SETTINGS.GENERAL',
		Text2: '',
		url: 'root.app.tables.settings',
		perm: 'menu.settings',
		icon: 'icon-settings',
		pastilleType: '',
		pastilleText: '',
		IndexOrder: 5,
		IndexRealOrder: 72,
		Enabled: true,
		LogId: 2876711,
		DW_MenuChilds: [
			{
				DWMenuId: 65,
				DWParentMenuId: 7,
				MenuGuid: '9b8aa8f2-4362-4ba4-b4fa-567fe9e5b30e',
				MenuParentGuid: 'b6f469fd-9779-4d89-aff0-1f0032ed106e',
				Text: 'FORMS.COUNTRY',
				Text2: '',
				url: 'root.app.tables.settings.pays',
				perm: 'DW_PaysController.Get',
				icon: 'fa fa-map-signs',
				pastilleType: '',
				pastilleText: '',
				IndexOrder: 5,
				IndexRealOrder: 78,
				Enabled: true,
				LogId: 2876762,
				DW_MenuChilds: [],
				DW_MenuParent: {
					$ref: '73'
				}
			},
			{
				DWMenuId: 66,
				DWParentMenuId: 7,
				MenuGuid: 'e1cc9c13-f514-440e-b36d-85df964137e0',
				MenuParentGuid: 'b6f469fd-9779-4d89-aff0-1f0032ed106e',
				Text: 'SETTINGS.MAIN',
				Text2: '',
				url: 'root.app.tables.settings.parametre',
				perm: 'DW_ParametreController.Get',
				icon: 'fa fa-gear',
				pastilleType: '',
				pastilleText: '',
				IndexOrder: 1,
				IndexRealOrder: 74,
				Enabled: true,
				LogId: 2876763,
				DW_MenuChilds: [],
				DW_MenuParent: {
					$ref: '73'
				}
			},
			{
				DWMenuId: 67,
				DWParentMenuId: 7,
				MenuGuid: '21273d71-bcd5-456b-9f92-10217a6203c2',
				MenuParentGuid: 'b6f469fd-9779-4d89-aff0-1f0032ed106e',
				Text: 'Consolidation',
				Text2: '',
				url: 'root.app.tables.settings.consoparametre',
				perm: 'DW_ConsoParametreController.Get',
				icon: 'fa fa-puzzle-piece',
				pastilleType: '',
				pastilleText: '',
				IndexOrder: 4,
				IndexRealOrder: 77,
				Enabled: true,
				LogId: 2876764,
				DW_MenuChilds: [],
				DW_MenuParent: {
					$ref: '73'
				}
			},
			{
				DWMenuId: 68,
				DWParentMenuId: 7,
				MenuGuid: 'a72ad9f6-5279-49b7-b5cf-85f4f10eafff',
				MenuParentGuid: 'b6f469fd-9779-4d89-aff0-1f0032ed106e',
				Text: 'BY_SOCIETY',
				Text2: 'Mapping',
				url: 'root.app.tables.settings.societemapping',
				perm: 'DW_SocieteMappingController.Get',
				icon: 'fa fa-code-fork',
				pastilleType: '',
				pastilleText: '',
				IndexOrder: 8,
				IndexRealOrder: 81,
				Enabled: true,
				LogId: 2876765,
				DW_MenuChilds: [],
				DW_MenuParent: {
					$ref: '73'
				}
			},
			{
				DWMenuId: 69,
				DWParentMenuId: 7,
				MenuGuid: '04f59e02-265b-49d0-af65-08c271412889',
				MenuParentGuid: 'b6f469fd-9779-4d89-aff0-1f0032ed106e',
				Text: 'Source BDD',
				Text2: '',
				url: 'root.app.tables.settings.sourcebd',
				perm: 'DW_SourceBdController.Get',
				icon: 'fa fa-database',
				pastilleType: '',
				pastilleText: '',
				IndexOrder: 6,
				IndexRealOrder: 79,
				Enabled: true,
				LogId: 2876766,
				DW_MenuChilds: [],
				DW_MenuParent: {
					$ref: '73'
				}
			},
			{
				DWMenuId: 70,
				DWParentMenuId: 7,
				MenuGuid: 'a8c24761-4e4a-44d3-a41a-e1f985e7b583',
				MenuParentGuid: 'b6f469fd-9779-4d89-aff0-1f0032ed106e',
				Text: 'Application',
				Text2: '',
				url: 'root.app.tables.settings.application',
				perm: 'DW_ApplicationController.Get',
				icon: 'icon-layout-tab-window',
				pastilleType: '',
				pastilleText: '',
				IndexOrder: 7,
				IndexRealOrder: 80,
				Enabled: true,
				LogId: 2876767,
				DW_MenuChilds: [],
				DW_MenuParent: {
					$ref: '73'
				}
			},
			{
				DWMenuId: 71,
				DWParentMenuId: 7,
				MenuGuid: '51a56d4f-c99c-4fb6-8026-9899e8b917d3',
				MenuParentGuid: 'b6f469fd-9779-4d89-aff0-1f0032ed106e',
				Text: 'Permissions',
				Text2: '',
				url: 'root.app.tables.settings.permission',
				perm: 'DW_PermissionRoleController.Get',
				icon: 'fa fa-unlock-alt',
				pastilleType: '',
				pastilleText: '',
				IndexOrder: 2,
				IndexRealOrder: 75,
				Enabled: true,
				LogId: 2876768,
				DW_MenuChilds: [],
				DW_MenuParent: {
					$ref: '73'
				}
			},
			{
				DWMenuId: 72,
				DWParentMenuId: 7,
				MenuGuid: '88f952fb-ddf2-49af-b368-ada30c0ac34c',
				MenuParentGuid: 'b6f469fd-9779-4d89-aff0-1f0032ed106e',
				Text: 'Configuration',
				Text2: '',
				url: 'root.app.tables.settings.appparametre',
				perm: 'DW_AppParametreController.Get',
				icon: 'fa fa-gears',
				pastilleType: '',
				pastilleText: '',
				IndexOrder: 0,
				IndexRealOrder: 73,
				Enabled: true,
				LogId: 2876769,
				DW_MenuChilds: [],
				DW_MenuParent: {
					$ref: '73'
				}
			},
			{
				DWMenuId: 73,
				DWParentMenuId: 7,
				MenuGuid: 'fae68461-9c4b-47ad-8eee-34624c67e83c',
				MenuParentGuid: 'b6f469fd-9779-4d89-aff0-1f0032ed106e',
				Text: 'Menu',
				Text2: '',
				url: 'root.app.tables.settings.menu',
				perm: 'DW_AppParametreController.Get',
				icon: 'icon-menu',
				pastilleType: '',
				pastilleText: '',
				IndexOrder: 3,
				IndexRealOrder: 76,
				Enabled: true,
				LogId: 2876770,
				DW_MenuChilds: [],
				DW_MenuParent: {
					$ref: '73'
				}
			}
		],
		DW_MenuParent: null
	},
	{
		DWMenuId: 8,
		DWParentMenuId: null,
		MenuGuid: 'b9af3d2b-8b2d-4b3d-b31c-35c4b8f0b82b',
		MenuParentGuid: null,
		Text: 'MAPS',
		Text2: '',
		url: 'root.app.maps',
		perm: 'authenticatedUser',
		icon: 'icon-location-pin',
		pastilleType: '',
		pastilleText: '',
		IndexOrder: 6,
		IndexRealOrder: 82,
		Enabled: true,
		LogId: 2876712,
		DW_MenuChilds: [],
		DW_MenuParent: null
	},
	{
		DWMenuId: 9,
		DWParentMenuId: null,
		MenuGuid: 'e74b3a42-59b8-4abd-96bd-0bb63b9c1fe7',
		MenuParentGuid: null,
		Text: 'CHARTS',
		Text2: '',
		url: 'root.app.charts',
		perm: 'authenticatedUser',
		icon: 'icon-pie-chart',
		pastilleType: '',
		pastilleText: '',
		IndexOrder: 7,
		IndexRealOrder: 83,
		Enabled: true,
		LogId: 2876713,
		DW_MenuChilds: [],
		DW_MenuParent: null
	}
];

payload = orderBy(payload, [{ field: 'IndexOrder', dir: 'asc' }]);

function dw_MenuToMenu(o: any): Menu {
	return new Menu(
		o.DWMenuId,
		o.Text,
		o.url,
		'',
		o.icon,
		'',
		'',
		false,
		o.DWParentMenuId,
		false,
		[]
	);
}

function addChild(parent: Menu, childs: Array<any>) {
	if (childs != null) {
		childs.forEach(mnu => {
			const _mnu = dw_MenuToMenu(mnu);
			parent.children.push(_mnu);
			addChild(_mnu, mnu.DW_MenuChilds);
		});
	}
}

const _MenuItems = [
	new Menu(
		1,
		'Tableau de bord',
		'/dashboard',
		'',
		'fa fa-tachometer',
		'',
		'',
		false,
		null,
		false,
		[]
	)
];

payload.forEach(mnu => {
	const _mnu = dw_MenuToMenu(mnu);
	addChild(
		_mnu,
		orderBy(mnu.DW_MenuChilds, [{ field: 'IndexOrder', dir: 'asc' }])
	);
	_MenuItems.push(_mnu);
});

export const MenuItems = _MenuItems;

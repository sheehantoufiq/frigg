module.exports = {
    labels: { singular: 'Crossbeam Overlap', plural: 'Crossbeam Overlaps' },
    requiredProperties: ['partner', 'population'],
    searchableProperties: ['partner', 'population'],
    primaryDisplayProperty: 'partner',
    secondaryDisplayProperties: [],
    archived: false,
    restorable: true,
    metaType: 'PORTAL_SPECIFIC',
    id: '3353478',
    fullyQualifiedName: 'p20725338_crossbeam_overlaps',
    createdAt: '2021-09-21T17:57:29.093Z',
    updatedAt: '2021-09-21T17:57:29.093Z',
    objectTypeId: '2-3353478',
    properties: [
        {
            updatedAt: '2021-09-21T17:57:29.222Z',
            createdAt: '2021-09-21T17:57:29.222Z',
            name: 'account_id',
            label: 'Account ID',
            type: 'string',
            fieldType: 'text',
            description: 'HubSpot Company ID (from Crossbeam)',
            groupName: 'crossbeam_overlaps_information',
            options: [],
            displayOrder: -1,
            calculated: false,
            externalOptions: false,
            archived: false,
            hasUniqueValue: false,
            hidden: false,
            modificationMetadata: [Object],
            formField: false,
        },
        {
            updatedAt: '2021-09-21T17:57:29.236Z',
            createdAt: '2021-09-21T17:57:29.236Z',
            name: 'crossbeam_eid',
            label: 'Crossbeam EID',
            type: 'string',
            fieldType: 'text',
            description: "Crossbeam's unique ID for this overlap",
            groupName: 'crossbeam_overlaps_information',
            options: [],
            displayOrder: -1,
            calculated: false,
            externalOptions: false,
            archived: false,
            hasUniqueValue: false,
            hidden: false,
            modificationMetadata: [Object],
            formField: false,
        },
        {
            name: 'hs_all_accessible_team_ids',
            label: 'All accessible team IDs',
            type: 'enumeration',
            fieldType: 'checkbox',
            description:
                'The team IDs, including up the team hierarchy, corresponding to all owner referencing properties for this object, both default and custom',
            groupName: 'crossbeam_overlaps_information',
            options: [],
            displayOrder: -1,
            calculated: false,
            externalOptions: false,
            hasUniqueValue: false,
            hidden: true,
            hubspotDefined: true,
            modificationMetadata: [Object],
            formField: false,
        },
        {
            name: 'hs_all_assigned_business_unit_ids',
            label: 'Business units',
            type: 'enumeration',
            fieldType: 'checkbox',
            description: 'The business units this record is assigned to.',
            groupName: 'crossbeam_overlaps_information',
            options: [],
            displayOrder: -1,
            calculated: false,
            externalOptions: false,
            hasUniqueValue: false,
            hidden: true,
            hubspotDefined: true,
            modificationMetadata: [Object],
            formField: false,
        },
        {
            name: 'hs_created_by_user_id',
            label: 'Created by user ID',
            type: 'number',
            fieldType: 'number',
            description:
                'The user that created this object. This value is automatically set by HubSpot and may not be modified.',
            groupName: 'crossbeam_overlaps_information',
            options: [],
            displayOrder: -1,
            calculated: false,
            externalOptions: false,
            hasUniqueValue: false,
            hidden: false,
            hubspotDefined: true,
            modificationMetadata: [Object],
            formField: false,
        },
        {
            name: 'hs_createdate',
            label: 'Object create date/time',
            type: 'datetime',
            fieldType: 'date',
            description:
                'The date and time at which this object was created. This value is automatically set by HubSpot and may not be modified.',
            groupName: 'crossbeam_overlaps_information',
            options: [],
            displayOrder: -1,
            calculated: false,
            externalOptions: false,
            hasUniqueValue: false,
            hidden: false,
            hubspotDefined: true,
            modificationMetadata: [Object],
            formField: false,
        },
        {
            name: 'hs_lastmodifieddate',
            label: 'Object last modified date/time',
            type: 'datetime',
            fieldType: 'date',
            description:
                'Most recent timestamp of any property update for this object. This includes HubSpot internal properties, which can be visible or hidden. This property is updated automatically.',
            groupName: 'crossbeam_overlaps_information',
            options: [],
            displayOrder: -1,
            calculated: false,
            externalOptions: false,
            hasUniqueValue: false,
            hidden: false,
            hubspotDefined: true,
            modificationMetadata: [Object],
            formField: false,
        },
        {
            name: 'hs_merged_object_ids',
            label: 'Merged object IDs',
            type: 'enumeration',
            fieldType: 'checkbox',
            description:
                'The list of object IDs that have been merged into this object. This value is automatically set by HubSpot and may not be modified.',
            groupName: 'crossbeam_overlaps_information',
            options: [],
            displayOrder: -1,
            calculated: false,
            externalOptions: false,
            hasUniqueValue: false,
            hidden: true,
            hubspotDefined: true,
            modificationMetadata: [Object],
            formField: false,
        },
        {
            name: 'hs_object_id',
            label: 'Object ID',
            type: 'number',
            fieldType: 'number',
            description:
                'The unique ID for this object. This value is automatically set by HubSpot and may not be modified.',
            groupName: 'crossbeam_overlaps_information',
            options: [],
            displayOrder: -1,
            calculated: false,
            externalOptions: false,
            hasUniqueValue: false,
            hidden: false,
            hubspotDefined: true,
            modificationMetadata: [Object],
            formField: false,
        },
        {
            name: 'hs_unique_creation_key',
            label: 'Unique creation key',
            type: 'string',
            fieldType: 'text',
            description: 'Unique property used for idempotent creates',
            groupName: 'crossbeam_overlaps_information',
            options: [],
            displayOrder: -1,
            calculated: false,
            externalOptions: false,
            hasUniqueValue: true,
            hidden: true,
            hubspotDefined: true,
            modificationMetadata: [Object],
            formField: false,
        },
        {
            name: 'hs_updated_by_user_id',
            label: 'Updated by user ID',
            type: 'number',
            fieldType: 'number',
            description:
                'The user that last updated this object. This value is automatically set by HubSpot and may not be modified.',
            groupName: 'crossbeam_overlaps_information',
            options: [],
            displayOrder: -1,
            calculated: false,
            externalOptions: false,
            hasUniqueValue: false,
            hidden: false,
            hubspotDefined: true,
            modificationMetadata: [Object],
            formField: false,
        },
        {
            name: 'hs_user_ids_of_all_notification_followers',
            label: 'User IDs of all notification followers',
            type: 'enumeration',
            fieldType: 'checkbox',
            description:
                'The user IDs of all users that have clicked follow within the object to opt-in to getting follow notifications',
            groupName: 'crossbeam_overlaps_information',
            options: [],
            displayOrder: -1,
            calculated: false,
            externalOptions: false,
            hasUniqueValue: false,
            hidden: true,
            hubspotDefined: true,
            modificationMetadata: [Object],
            formField: false,
        },
        {
            name: 'hs_user_ids_of_all_notification_unfollowers',
            label: 'User IDs of all notification unfollowers',
            type: 'enumeration',
            fieldType: 'checkbox',
            description:
                'The user IDs of all object owners that have clicked unfollow within the object to opt-out of getting follow notifications',
            groupName: 'crossbeam_overlaps_information',
            options: [],
            displayOrder: -1,
            calculated: false,
            externalOptions: false,
            hasUniqueValue: false,
            hidden: true,
            hubspotDefined: true,
            modificationMetadata: [Object],
            formField: false,
        },
        {
            name: 'hs_user_ids_of_all_owners',
            label: 'User IDs of all owners',
            type: 'enumeration',
            fieldType: 'checkbox',
            description: 'The user IDs of all owners of this object',
            groupName: 'crossbeam_overlaps_information',
            options: [],
            displayOrder: -1,
            calculated: false,
            externalOptions: false,
            hasUniqueValue: false,
            hidden: true,
            hubspotDefined: true,
            modificationMetadata: [Object],
            formField: false,
        },
        {
            updatedAt: '2021-09-21T17:57:29.227Z',
            createdAt: '2021-09-21T17:57:29.227Z',
            name: 'partner',
            label: 'Partner Name',
            type: 'string',
            fieldType: 'text',
            description: '',
            groupName: 'crossbeam_overlaps_information',
            options: [],
            displayOrder: -1,
            calculated: false,
            externalOptions: false,
            archived: false,
            hasUniqueValue: false,
            hidden: false,
            modificationMetadata: [Object],
            formField: true,
        },
        {
            updatedAt: '2021-09-21T17:57:29.227Z',
            createdAt: '2021-09-21T17:57:29.227Z',
            name: 'partner_ae_email',
            label: 'Partner AE Email',
            type: 'string',
            fieldType: 'text',
            description: '',
            groupName: 'crossbeam_overlaps_information',
            options: [],
            displayOrder: -1,
            calculated: false,
            externalOptions: false,
            archived: false,
            hasUniqueValue: false,
            hidden: false,
            modificationMetadata: [Object],
            formField: false,
        },
        {
            updatedAt: '2021-09-21T17:57:29.232Z',
            createdAt: '2021-09-21T17:57:29.232Z',
            name: 'partner_ae_name',
            label: 'Partner AE Name',
            type: 'string',
            fieldType: 'text',
            description: '',
            groupName: 'crossbeam_overlaps_information',
            options: [],
            displayOrder: -1,
            calculated: false,
            externalOptions: false,
            archived: false,
            hasUniqueValue: false,
            hidden: false,
            modificationMetadata: [Object],
            formField: false,
        },
        {
            updatedAt: '2021-09-21T17:57:29.235Z',
            createdAt: '2021-09-21T17:57:29.235Z',
            name: 'partner_ae_phone',
            label: 'Partner AE Phone',
            type: 'string',
            fieldType: 'text',
            description: '',
            groupName: 'crossbeam_overlaps_information',
            options: [],
            displayOrder: -1,
            calculated: false,
            externalOptions: false,
            archived: false,
            hasUniqueValue: false,
            hidden: false,
            modificationMetadata: [Object],
            formField: false,
        },
        {
            updatedAt: '2021-09-21T17:57:29.242Z',
            createdAt: '2021-09-21T17:57:29.242Z',
            name: 'partner_population',
            label: 'Partner Population',
            type: 'string',
            fieldType: 'text',
            description: '',
            groupName: 'crossbeam_overlaps_information',
            options: [],
            displayOrder: -1,
            calculated: false,
            externalOptions: false,
            archived: false,
            hasUniqueValue: false,
            hidden: false,
            modificationMetadata: [Object],
            formField: false,
        },
        {
            updatedAt: '2021-09-21T17:57:29.245Z',
            createdAt: '2021-09-21T17:57:29.245Z',
            name: 'population',
            label: 'Population',
            type: 'string',
            fieldType: 'text',
            description: '',
            groupName: 'crossbeam_overlaps_information',
            options: [],
            displayOrder: -1,
            calculated: false,
            externalOptions: false,
            archived: false,
            hasUniqueValue: false,
            hidden: false,
            modificationMetadata: [Object],
            formField: true,
        },
    ],
    associations: [
        {
            fromObjectTypeId: '2-3353478',
            toObjectTypeId: '0-51',
            name: 'crossbeam_overlap_to_conversation_session',
            cardinality: 'ONE_TO_MANY',
            inverseCardinality: 'ONE_TO_MANY',
            id: '221',
            createdAt: null,
            updatedAt: null,
        },
        {
            fromObjectTypeId: '0-51',
            toObjectTypeId: '2-3353478',
            name: 'crossbeam_overlap_to_conversation_session',
            cardinality: 'ONE_TO_MANY',
            inverseCardinality: 'ONE_TO_MANY',
            id: '222',
            createdAt: null,
            updatedAt: null,
        },
        {
            fromObjectTypeId: '2-3353478',
            toObjectTypeId: '0-27',
            name: 'crossbeam_overlap_to_task',
            cardinality: 'ONE_TO_MANY',
            inverseCardinality: 'ONE_TO_MANY',
            id: '215',
            createdAt: null,
            updatedAt: null,
        },
        {
            fromObjectTypeId: '0-27',
            toObjectTypeId: '2-3353478',
            name: 'crossbeam_overlap_to_task',
            cardinality: 'ONE_TO_MANY',
            inverseCardinality: 'ONE_TO_MANY',
            id: '216',
            createdAt: null,
            updatedAt: null,
        },
        {
            fromObjectTypeId: '2-3353478',
            toObjectTypeId: '0-2',
            name: 'crossbeam_overlap_to_company',
            cardinality: 'ONE_TO_MANY',
            inverseCardinality: 'ONE_TO_MANY',
            id: '211',
            createdAt: null,
            updatedAt: null,
        },
        {
            fromObjectTypeId: '0-2',
            toObjectTypeId: '2-3353478',
            name: 'crossbeam_overlap_to_company',
            cardinality: 'ONE_TO_MANY',
            inverseCardinality: 'ONE_TO_MANY',
            id: '212',
            createdAt: null,
            updatedAt: null,
        },
        {
            fromObjectTypeId: '2-3353478',
            toObjectTypeId: '0-46',
            name: 'crossbeam_overlap_to_note',
            cardinality: 'ONE_TO_MANY',
            inverseCardinality: 'ONE_TO_MANY',
            id: '219',
            createdAt: null,
            updatedAt: null,
        },
        {
            fromObjectTypeId: '0-46',
            toObjectTypeId: '2-3353478',
            name: 'crossbeam_overlap_to_note',
            cardinality: 'ONE_TO_MANY',
            inverseCardinality: 'ONE_TO_MANY',
            id: '220',
            createdAt: null,
            updatedAt: null,
        },
        {
            fromObjectTypeId: '2-3353478',
            toObjectTypeId: '0-49',
            name: 'crossbeam_overlap_to_email',
            cardinality: 'ONE_TO_MANY',
            inverseCardinality: 'ONE_TO_MANY',
            id: '223',
            createdAt: null,
            updatedAt: null,
        },
        {
            fromObjectTypeId: '0-49',
            toObjectTypeId: '2-3353478',
            name: 'crossbeam_overlap_to_email',
            cardinality: 'ONE_TO_MANY',
            inverseCardinality: 'ONE_TO_MANY',
            id: '224',
            createdAt: null,
            updatedAt: null,
        },
        {
            fromObjectTypeId: '2-3353478',
            toObjectTypeId: '0-47',
            name: 'crossbeam_overlap_to_meeting',
            cardinality: 'ONE_TO_MANY',
            inverseCardinality: 'ONE_TO_MANY',
            id: '213',
            createdAt: null,
            updatedAt: null,
        },
        {
            fromObjectTypeId: '0-47',
            toObjectTypeId: '2-3353478',
            name: 'crossbeam_overlap_to_meeting',
            cardinality: 'ONE_TO_MANY',
            inverseCardinality: 'ONE_TO_MANY',
            id: '214',
            createdAt: null,
            updatedAt: null,
        },
        {
            fromObjectTypeId: '2-3353478',
            toObjectTypeId: '0-48',
            name: 'crossbeam_overlap_to_call',
            cardinality: 'ONE_TO_MANY',
            inverseCardinality: 'ONE_TO_MANY',
            id: '217',
            createdAt: null,
            updatedAt: null,
        },
        {
            fromObjectTypeId: '0-48',
            toObjectTypeId: '2-3353478',
            name: 'crossbeam_overlap_to_call',
            cardinality: 'ONE_TO_MANY',
            inverseCardinality: 'ONE_TO_MANY',
            id: '218',
            createdAt: null,
            updatedAt: null,
        },
    ],
    name: 'crossbeam_overlaps',
};

import { ApiGroupGetGroupsByIdParams } from '@redhat-cloud-services/host-inventory-client/ApiGroupGetGroupsById';
import { ApiResourceTypeGetResourceTypeGroupsListParams } from '@redhat-cloud-services/host-inventory-client/ApiResourceTypeGetResourceTypeGroupsList';
import { ResourceDefinition } from '@redhat-cloud-services/rbac-client/types';
import flatten from 'lodash/flatten';
import { getInventoryGroupsApi, getInventoryResourceTypesApi } from '../shared/user-login';

const inventoryResourceTypesApi = getInventoryResourceTypesApi();
const inventoryGroupsApi = getInventoryGroupsApi();

export const getInventoryGroups = async (params: ApiResourceTypeGetResourceTypeGroupsListParams = {}) => {
  return inventoryResourceTypesApi.apiResourceTypeGetResourceTypeGroupsList(params);
};

export const getInventoryGroupsDetails = async (params: ApiGroupGetGroupsByIdParams) => {
  return inventoryGroupsApi.apiGroupGetGroupsById(params);
};

export const processResourceDefinitions = (resourceDefinitions: ResourceDefinition[]) =>
  resourceDefinitions ? flatten(resourceDefinitions.map((definition) => definition.attributeFilter.value)) : [];

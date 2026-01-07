import { APIFactory } from '@redhat-cloud-services/javascript-clients-shared';
import { apiGroupGetGroupsById, apiResourceTypeGetResourceTypeGroupsList } from '@redhat-cloud-services/host-inventory-client';
import { axiosInstance } from './axiosConfig';
import { INVENTORY_API_BASE } from '../utilities/constants';

// The host-inventory-client@4.1.7+ exports functions with the same signature as rbac-client:
// function apiGroupGetGroupsById(sendRequest, ...args) { return sendRequest(config); }
// So we can use them directly with APIFactory.
//
// NOTE: Earlier versions (4.0.x) had a different signature that required a wrapper.
// If you see "sendRequest is not a function" errors, check the package version.

const inventoryResourceTypesEndpoints = {
  apiResourceTypeGetResourceTypeGroupsList,
};

const inventoryResourceTypesApi = APIFactory<typeof inventoryResourceTypesEndpoints>(INVENTORY_API_BASE, inventoryResourceTypesEndpoints, {
  axios: axiosInstance,
});

const inventoryGroupsEndpoints = {
  apiGroupGetGroupsById,
};

const inventoryGroupsApi = APIFactory<typeof inventoryGroupsEndpoints>(INVENTORY_API_BASE, inventoryGroupsEndpoints, {
  axios: axiosInstance,
});

export function getInventoryResourceTypesApi() {
  return inventoryResourceTypesApi;
}

export function getInventoryGroupsApi() {
  return inventoryGroupsApi;
}

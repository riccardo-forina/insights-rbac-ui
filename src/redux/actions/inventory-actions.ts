import { ApiResourceTypeGetResourceTypeGroupsListParams } from '@redhat-cloud-services/host-inventory-client/ApiResourceTypeGetResourceTypeGroupsList';

import * as InventoryHelper from '../../helpers/role/inventory-helper';
import * as ActionTypes from '../action-types';

export const fetchInventoryGroups = (permissions: string[], config: ApiResourceTypeGetResourceTypeGroupsListParams) => ({
  type: ActionTypes.FETCH_INVENTORY_GROUPS,
  meta: { permissions, config },
  payload: InventoryHelper.getInventoryGroups(config),
});

export const fetchInventoryGroupsDetails = (groupsIds: string[]) => {
  return {
    type: ActionTypes.FETCH_INVENTORY_GROUPS_DETAILS,
    meta: { groupsIds },
    payload: InventoryHelper.getInventoryGroupsDetails({ groupIdList: groupsIds.filter((item) => item?.length > 0) }),
  };
};

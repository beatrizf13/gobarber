import { Router } from 'express';

import ProvidersController from '@modules/appointments/infra/http/controllers/ProvidersController';
import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import ProviderDayAvailabilityController from '../controllers/ProviderDayAvailability';
import ProviderMonthAvailabilityController from '../controllers/ProviderMonthAvailability';

const providersRouter = Router();

const providersController = new ProvidersController();
const providerDayAvailabilityController = new ProviderDayAvailabilityController();
const providerMonthAvailabilityController = new ProviderMonthAvailabilityController();

providersRouter.use(ensureAuthenticated);

providersRouter.get('/', providersController.index);

providersRouter.get(
  '/:provider_id/month-availability',
  providerMonthAvailabilityController.index,
);

providersRouter.get(
  '/:provider_id/day-availability',
  providerDayAvailabilityController.index,
);

export default providersRouter;

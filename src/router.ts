// Generouted, changes to this file will be overriden
/* eslint-disable */

import { components, hooks, utils } from '@generouted/react-router/client'

export type Path =
  | `/`
  | `/charecters/:currentPage?`
  | `/charecters/view/:id`
  | `/login`
  | `/logout`

export type Params = {
  '/charecters/:currentPage?': { currentPage?: string }
  '/charecters/view/:id': { id: string }
}

export type ModalPath = never

export const { Link, Navigate } = components<Path, Params>()
export const { useModals, useNavigate, useParams } = hooks<Path, Params, ModalPath>()
export const { redirect } = utils<Path, Params>()

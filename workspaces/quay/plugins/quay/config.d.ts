/*
 * Copyright 2024 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
export interface Config {
  /** Configurations for the Quay plugin */
  quay?: {
    /**
     * The proxy path for the Quay instance.
     * @visibility frontend
     */
    proxyPath?: string;
    /**
     * The UI url of the Quay instance.
     * @visibility frontend
     */
    uiUrl?: string;
    /**
     * The API URl for a quay instance.
     * This is set for the quay-backend plugin.
     * If this is set, we use the quay-backend plugin.
     * If not, we default to using the proxy config.
     * @visibility frontend
     */
    apiUrl?: string;
  };
}

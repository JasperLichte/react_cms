import { useState } from 'react';
import Config from '../models/Config';
import ClientConfig from '../models/ClientConfig';
import ServerConfig from '../models/ServerConfig';
import useClientConfig from './useClientConfig';
import useServerConfig from './useServerConfig';

const useConfig = (): Config|null => {
    const clientConfig: ClientConfig|null = useClientConfig();
    const serverConfig: ServerConfig|null = useServerConfig(
      clientConfig
      ? `${clientConfig.server.base_path}${clientConfig.server.config_location}`
      : ''
    );
    const [config, setConfig] = useState<Config|null>(null);
    if (config === null && clientConfig !== null && serverConfig !== null) {
      setConfig(new Config(clientConfig, serverConfig));
    }

    return config;
}

export default useConfig;
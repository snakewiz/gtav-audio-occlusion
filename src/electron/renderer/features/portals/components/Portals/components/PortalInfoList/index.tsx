import React from 'react';

import { SerializedNaOcclusionPortalInfoMetadata } from '@/electron/common/types/naOcclusionInteriorMetadata';

import { Table } from '@/electron/renderer/components/Table';

import { Container, Content } from './styles';

type PortalInfoListProps = {
  data: SerializedNaOcclusionPortalInfoMetadata[];
};

export const PortalInfoList = ({ data }: PortalInfoListProps) => {
  return (
    <Container>
      <Content>
        <Table>
          <thead>
            <tr>
              <th>Index</th>
              <th>Room from</th>
              <th>Room to</th>
              <th>Interior from</th>
              <th>Interior to</th>
            </tr>
          </thead>
          <tbody>
            {data.map((portalInfo, portalInfoIndex) => (
              <tr key={portalInfoIndex}>
                <td>{portalInfoIndex}</td>
                <td>{portalInfo.roomIdx}</td>
                <td>{portalInfo.destRoomIdx}</td>
                <td>{portalInfo.interiorProxyHash}</td>
                <td>{portalInfo.destInteriorHash}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Content>
    </Container>
  );
};
